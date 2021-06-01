 var gIdCount = 0;
var gById = {};

/*unit testing*/
var person1 = createPerson('person1', new Date(), [], []);
var person2 = createPerson('person2', new Date(), [person1], []);
var person3 = createPerson('person3', new Date(), [person1], []);
console.log(person1);


/*functions*/
function createPerson(name, dob, parents = [], children = []) {

    var person = {
        id : gIdCount++,
        name: name,
        dob: dob,
        parents: parents,
        children: children
    }

    gById[person] = person.id;
    return person;
}

function addChild(parent, child) {
    if (parent.dob > child.dob) alert('the parents date of birth is after the child\'s');
    parent.children.push(child);
}

function addParent(child, parent) {
    if (parent.dob > child.dob) alert('the parents date of birth is after the child\'s');
    child.parents.push(parent);
}