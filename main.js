// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random DNA base different to input
const returnDiffRandBase = base => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  const reducedBases = dnaBases.filter(x => x !== base);
  return reducedBases[Math.floor(Math.random() * 3)];
}

returnDiffRandBase('T');

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates an object with the properties provided
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    // method simulates  mutation, randomly selecting a gene and changing it
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      this.dna[randIndex] = returnDiffRandBase(this.dna[randIndex]);
      return this.dna;
    },
    // compares dna sequences of different pAequor objects
    compareDNA(pAeqour) {
      let count=0;
      for (let i=0; i < this.dna.length; i++){
        if (this.dna[i] === pAeqour.dna[i]){
          count++;
        }
      }
      const percent = Math.round(100 * (count / this.dna.length));
      console.log(`specimen #${this.specimenNum} and specimen #${pAeqour.specimenNum} have ${percent}% DNA in common.`);
    },
    // Calculates chances of survival
    willLikelySurvive() {
      let numOfCG = 0;
      for (let i of this.dna){
        if (i === 'C' || i === 'G'){
          numOfCG++;
        }
      };
      const percentOfCG = 100 * (numOfCG / this.dna.length);
      return percentOfCG >= 60;
    }
  };
};


// Creates num instances of pAequor that can survive
const pAequorsCreator = num => {
  const pAequors = [];
  let count = 1;

  while (pAequors.length < num){
    let newOrg = pAequorFactory(count, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      pAequors.push(newOrg);
    }
    count++;
  }
  return pAequors;
}

// testing

console.log(pAequorsCreator(30));

// Adding comment to test git in VS code
// Here we goo!!!!!









