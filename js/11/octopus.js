class Octopus {

    constructor(i,j,e) {
        this.loc = {i:i,j:j};
        this.energy = e;
        this.hasFlashed = false;
    }

/**
 * Steps
 * 
 * First, the energy level of each octopus increases by 1.
 * Then, any octopus with an energy level greater than 9 flashes. 
 *      This increases the energy level of all adjacent octopuses by 1, 
 *      including octopuses that are diagonally adjacent.
 *      If this causes an octopus to have an energy level greater than 9, it also flashes. 
 *      This process continues as long as new octopuses
 *           keep having their energy level increased beyond 9. 
 *          (An octopus can only flash at most once per step.)
 * Finally, any octopus that flashed during this step 
 *      has its energy level set to 0, 
 *      as it used all of its energy to flash.

 */

    energyUp() {
        if (this.hasFlashed) {
            return this.energy;
        } else {
            this.energy ++;
            if (this.energy > 9 && this.hasFlashed == false) {
                this.flash();
            }
        return this.energy;
    }
}

    flash() {
        // called by energyUp
        // set hasFlashed flag
        if (this.hasFlashed) {
            return false;
        }
        this.hasFlashed = true;
        // raise energy of all adjacent octopi
        let i = this.loc.i;
        let j = this.loc.j;
        // console.log(`this Octopus: (${i},${j})`);
        for (let io = -1; io <= 1; io++) {
            for (let jo = -1; jo <= 1; jo++) {
                
                if ((io == 0) && (jo == 0)) {
                    // console.log('cannot address self');
                } else if (i+io < 0 || j+jo < 0 || i+io > octopi.length-1 || j+jo > octopi.length-1) {
                    // console.log(`skipping Octopus (${i+io}, ${j+jo})`);
                    continue;
                } else {
                    // console.log(`addressing Octopus (${i+io}, ${j+jo})`);
                    octopi[i+io][j+jo].energyUp();
                }
            }
            
        }
        // reset energy to zero
        this.energy = 0;
        // add to total flashes
        total_flashes ++;
       
        // return something?
    }

    stepReset() {
        this.hasFlashed = false;

    }

}   