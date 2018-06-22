function test(obj) {
var inp1 = document.getElementById('CardNumber1');


number.value = inp1.value; 

    if (obj.value.length == 19) {
        var next = obj.nextSibling;
        while(next.nodeType != 1 && next.nextSibling)
            next = next.nextSibling;
        if (next.nodeType == 1)
            next.focus();
    }
}

function validate(inp) {
inp.value = inp.value.replace(/[^0-9]/, "");
}
