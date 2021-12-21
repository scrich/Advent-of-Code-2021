// unpacked packets are stored in myResult

console.time('parse json');
document.write(`Packet value is ${parsePackets(myResult)}`);
console.timeEnd('parse json');

function parsePackets(bin_packet) {
    
    let return_value;
    // console.log(`typeID ${bin_packet.typeID} is a ${typeof(bin_packet.typeID)}`);

    switch (bin_packet.typeID) {
        
        case 0:
            /**
             * Packets with type ID 0 are sum packets
             *  - their value is the sum of the values of their sub-packets. 
             * If they only have a single sub-packet, 
             *  their value is the value of the sub-packet.
             */
            // console.log(`case 0`);
            return_value = bin_packet.subpacket.reduce(function(previous, current) {
                return previous + parsePackets(current)
            }, 0)
            break;

        case 1:
            /**
             * Packets with type ID 1 are product packets 
             *  - their value is the result of multiplying together the values of their sub-packets. 
             * If they only have a single sub-packet, 
             *  their value is the value of the sub-packet.
             */
            // console.log('case 1');
            return_value = bin_packet.subpacket.reduce(function(previous, current) {
                return previous * parsePackets(current)
            }, 1)
            break;
        
        case 2:
            /**
             * Packets with type ID 2 are minimum packets
             *  - their value is the minimum of the values of their sub-packets.
             */
            // console.log('case 2');
            return_value = bin_packet.subpacket.reduce(function(previous, current) {
                let curr = parsePackets(current);
                return (previous > curr ? curr : previous)
                
            }, parsePackets(bin_packet.subpacket[0]))
            break;
        
        case 3:
            /**
             * Packets with type ID 3 are maximum packets
             *  - their value is the maximum of the values of their sub-packets.
             */
            //  console.log('case 3');
             return_value = bin_packet.subpacket.reduce(function(previous, current) {
                 let curr = parsePackets(current);
                 return (curr > previous ? curr : previous)
                 
             }, parsePackets(bin_packet.subpacket[0]))
            break;

        case 4:
            return_value = bin_packet.literal;
            break;

        case 5:
            /**
             * Packets with type ID 5 are greater than packets
             *  - their value is 1 
             *      if the value of the first sub-packet 
             *      is greater than the value of the second sub-packet; 
             * otherwise, their value is 0. 
             * These packets always have exactly two sub-packets.
             */

            return_value = (parsePackets(bin_packet.subpacket[0]) > parsePackets(bin_packet.subpacket[1]) ? 1 : 0);
            // console.log(return_value);
            break;

        case 6:
            /**
             * Packets with type ID 6 are less than packets
             *  - their value is 1 
             *      if the value of the first sub-packet 
             *      is less than the value of the second sub-packet; 
             * otherwise, their value is 0. 
             * These packets always have exactly two sub-packets.
             */

            return_value = (parsePackets(bin_packet.subpacket[0]) < parsePackets(bin_packet.subpacket[1]) ? 1 : 0);
            break;
        
        case 7:
            /**
             * Packets with type ID 7 are equal to packets
             *  - their value is 1 
             *      if the value of the first sub-packet 
             *      is equal to the value of the second sub-packet; 
             * otherwise, their value is 0. 
             * These packets always have exactly two sub-packets.
             */
            return_value = (parsePackets(bin_packet.subpacket[0]) == parsePackets(bin_packet.subpacket[1]) ? 1 : 0);
            break;
    
        default:
            break;
    }

    return return_value;
}