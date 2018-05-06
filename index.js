const math = require('mathjs');
// const plotly = require('plotly')('login', 'API_KEY');
const {distance_matrix, flows_matrix, chromosome_size} = require('./data/had12');
const population_size = 100;
const crossover_probability = 0.7;
const mutation_probability = 0.01;

Array.prototype.random = function() {return this.sort(() => Math.random() - 0.5)};

function generatePopulation(chromosome_size, population_size) {
    let population = [], chromosome;
    for (let i=0; i < population_size; i++) {
        chromosome = Array.from(new Array(chromosome_size), (_, index) => index);
        chromosome.random();
        population.push(chromosome);
    }
    return population;
}

function fitness_score(population, distance_matrix, flows_matrix) {
    let chromosome, score_list = [];
    for (chromosome of population) {
        let i = 0; let score = 0;
        while (i < chromosome.length) {
            let j = i; 
            while (j < chromosome.length) {
                score += distance_matrix.subset(math.index(i, j)) * flows_matrix.subset(math.index(chromosome[i], chromosome[j]))
                j++;
            }
            i++;
        }
        score_list.push(1 / score);     
    }
    return score_list;
}

function normalize() {
    let sum = 0, normalized = Object.assign([], this);
    normalized.forEach(elem => { sum += elem});
    normalized.forEach((elem, index, arr) => { normalized[index] /= sum });
    return normalized;
}

function tournamentSelection(population_list, score_list, elitism = true) {
    let parent_population = [];
    let population_size = elitism? score_list.length - 1 : score_list.length;
    let random_index_first, random_index_second, winner_chromosome;
    for (let i = 0; i <= 5; i++) {
        random_index_first = Math.floor(Math.random() * population_size);
        random_index_second = Math.floor(Math.random() * population_size);
        if (score_list[random_index_first] > score_list[random_index_second]) {
            winner_chromosome = population_list[random_index_first];
        } else {
            winner_chromosome = population_list[random_index_second];
        }
        parent_population.push(winner_chromosome);
    }
    parent_population.push(population_list[score_list.indexOf(Math.max(...score_list))]);
    return parent_population;
}

function rulleteSelection(population_list, score_list, elitism = true) {  
   
    let parent_population = [];
    let population_size = elitism? score_list.length - 1 : score_list.length;
    
    score_list.reduce((prev, _, index, arr) => (arr[index] += prev), 0);
    let counter;
    for (let i = 0; i < population_size; i++) {
        let propability = Math.random() * 1;
        
        if (propability < score_list[0]) {
            parent_population.push(population_list[0]);
            continue;
        }
        counter = 0;
        while (propability > score_list[counter]) { counter++; }
        parent_population.push(population_list[counter]);
    }
    return parent_population;
}


function chromosomesCrossover(chr_x, chr_y) {
    let chromosome_x = Object.assign([], chr_x), chromosome_y = Object.assign([], chr_y);
    let crossover_point = Math.floor(Math.random() * (chromosome_x.length));
    let gen_x, gen_y, gen_x_index_y, gen_y_index_x;
    for (let i = 0; i < crossover_point; i++) {
        gen_x = chromosome_x[i];
        gen_y = chromosome_y[i];
        gen_x_index_y = chromosome_x.indexOf(gen_y);
        gen_y_index_x = chromosome_y.indexOf(gen_x);
        chromosome_x[gen_x_index_y] = gen_x;
        chromosome_y[gen_y_index_x] = gen_y;
        chromosome_x[i] = gen_y;
        chromosome_y[i] = gen_x;
    }
    return [chromosome_x, chromosome_y];
}

function populationCrossover(population, crossover_probability) {
    let species_nc = [], crossover_list = [], rnd;
    for (let n_chrom of population) {
        rnd = Math.random() * 1;
        if (rnd < crossover_probability) {
            crossover_list.push(n_chrom)
        } else {
            species_nc.push(n_chrom)
        }
    }

    let crossover_tuples = []
    cr_iterate = crossover_list.map((chromosome, index) => ([index, chromosome]));
    let cch_idx, c_chrom, cb_idx, cross_buddy;
    while (cr_iterate.length > 0) {
        [cch_idx, c_chrom] = cr_iterate.pop();
        if (!(cr_iterate.length > 0)) {
            species_nc.push(c_chrom);
            break;
        }
        [cb_idx, cross_buddy] = cr_iterate[Math.floor(Math.random() * cr_iterate.length)];
        cr_iterate = cr_iterate.filter(([x_k, x_v]) => {
            return x_k != cb_idx;
        });
        crossover_tuples.push([c_chrom, cross_buddy]);
    }

    let after_cover = [], cr_o, cr_t;
    for (let cr_tup of crossover_tuples) {
        [cr_o, cr_t] = chromosomesCrossover(cr_tup[0], cr_tup[1])
        after_cover.push(cr_o)
        after_cover.push(cr_t)
    }
    let new_species  = [...after_cover, ...species_nc]
    return new_species
}

function mutationPopulation(new_species, mutation_probability) {
    let mutated = [], index, propability, gen;
    for (let chromosome of new_species) {
        for (let i = 0; i < chromosome.length; i++) {
            propability = Math.random() * 1;
            if (propability  < mutation_probability) {
                index = Math.floor(Math.random() * chromosome.length)
                gen = chromosome[i]
                chromosome[i] = chromosome[index]
                chromosome[index] = gen
            }
        }
        mutated.push(chromosome);
    }
    return new_species;
}

const data = [{x: [],y: [],type: "scatter"}];

//let scores = [];

let population_list = generatePopulation(chromosome_size, population_size);
let fit_scores, fit_scores_norm, selected_ch, crossed_ch, mutated_ch, max_fitness, max_chromosome, avg_fitness, min_fitness;
for (let i = 1; i <= 100; i++) {
    fit_scores = fitness_score(population_list, flows_matrix, distance_matrix);
    fit_scores_norm = normalize.call(fit_scores);
    selected_ch = tournamentSelection(population_list, fit_scores_norm, elitism = false);
   // selected_ch = rulleteSelection(population_list, fit_scores_norm, elitism = false);
    crossed_ch = populationCrossover(selected_ch, crossover_probability);
    mutated_ch = mutationPopulation(crossed_ch, mutation_probability);
 
    min_fitness = Math.min(...fit_scores);
    avg_fitness = math.sum(...fit_scores)/fit_scores.length;
    max_fitness = Math.max(...fit_scores);
    max_chromosome = population_list[fit_scores.indexOf(max_fitness)];
    data[0].y.push(1 / max_fitness);
    

    console.log(`Epoch: ${i} Population fitness score: ${1 / avg_fitness} |  Max score: ${1 / max_fitness} | Max Chromosome: ${max_chromosome}`);
    data[0].x.push(i);
    population_list = mutated_ch;
}


// const graphOptions = {filename: "date-axes", fileopt: "overwrite"};
// plotly.plot(data, graphOptions, function (err, msg) {
//     console.log(msg);
// })
