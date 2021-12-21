// advent of code
// https://adventofcode.com/2021/day/16

console.time('process json')
let myResult = parseHexPacket(packets[0])[0];

// console.log(`myResult is ${JSON.stringify(myResult)}`);
console.log(`myResult is ${JSON.stringify(myResult, null, 2)}`);

console.log(`version sum ${gVersionSum}`);
console.timeEnd('process json')

function parseHexPacket(hex_packet) {

    console.log(`processing hex_packet ${hex_packet}`);
    let bin_packet = hex_to_bin(hex_packet);

    // process bin_packet
    let bin_parsed = parseBinPacket(bin_packet);
    let rest = bin_parsed[1];

    return bin_parsed;

};

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

// output(myResult);
output(syntaxHighlight(myResult));

function output(inp) {
    document.getElementById('part1').appendChild(document.createElement('pre')).innerHTML = inp;
    // document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function parseBinPacket(bin_packet) {
    let return_packet = {};
    let rest = '' // where we'll store the unprocessed binary string
    // console.log(`parseBinPacket(${bin_packet})`);

    let result = getVersionType(bin_packet)

    // console.log(result);
    return_packet.version = result.version;
    return_packet.typeID = result.typeID;
    rest = result.rest;

    if  (return_packet.typeID == 4) {
        // literal
        // console.log('we will return a literal');
        let result = parseLiteral(rest);
        // console.log(result);
        return_packet.literal = parseInt(result[0],2);
        rest = result[1]

        // if we have parsed a literal, we should check to see if there is another one.
        // or should we?

    } else {
        // not a literal
        // console.log('the packet is an operator');
        // console.log(rest);
        let length_type = parseInt(rest[0],2);
        rest = rest.slice(1,);
        // console.log(length_type, rest);

        if (length_type == 0) {
            // console.log('bit length operator');
            let bit_length = parseInt(rest.slice(0, 15), 2);
            rest = rest.slice(15,);

            let sub_bin_packet = rest.slice(0, bit_length);
            // console.log(`sub_bin_packet ${sub_bin_packet} length ${sub_bin_packet.length}`);
            rest = rest.slice(bit_length,);
            // console.log(`rest ${rest}`);
                   
            let subpacket = [];
            do {
            let result = parseBinPacket(sub_bin_packet);
            subpacket.push(result[0]);
            sub_bin_packet = result[1];
            } while (sub_bin_packet.length > 0)

            return_packet.subpacket = subpacket;
        }

        if (length_type == 1) {
            // console.log('subpacket count operator');
            let packet_count = parseInt(rest.slice(0, 11), 2);
            rest = rest.slice(11,);
            // console.log(`rest ${rest}`);
            // console.log(`packet_count`, packet_count);

            // parse the number of packets
            let subpacket = [];
            for (let i = 0; i < packet_count; i++) {
                let result = parseBinPacket(rest);
                subpacket.push(result[0]);
                rest = result[1].slice();
            }

            return_packet.subpacket = subpacket;
        }

    }
    
    // console.log('rest before return');
    // console.log(rest);
    gVersionSum = gVersionSum + return_packet.version;
    return [return_packet, rest]
}

/**
 * 
 * @param {string} bin_packet 
 * @returns 
 */
function getVersionType(bin_packet) {
    let V = parseInt(bin_packet.slice(0, 3),2);
    let T = parseInt(bin_packet.slice(3, 6),2);
    let rest = bin_packet.slice(6,);
    // console.log(rest);
    return {'version':V, 'typeID':T, 'rest':rest};
}



function parseLiteral(string) {
    // console.log(`parseLiteral with ${string}`);
    if (string[0] == '0') {
        return [string.slice(1, 5), string.slice(5,)];
    } else if (string[0] == '1') {
        let recurse = parseLiteral(string.slice(5,));
        return [string.slice(1, 5) + recurse[0], recurse[1]];
    } else {
        // error
        return '-1';
    }
}



function hex_to_bin(hex) {
    return hex.split('').map(x => {
        return ('0000' + parseInt(x, 16).toString(2)).slice(-4);
    }).join('');
}