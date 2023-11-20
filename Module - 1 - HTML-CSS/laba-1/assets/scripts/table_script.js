function add(){
    document.getElementById("id-table").value = document.getElementById("name").textContent;
    document.getElementById("id-table").value = document.getElementById("course").textContent;
    document.getElementById("id-table").value = document.getElementById("gtihub").textContent;   
}

const x = { v: [1] }

const a = { a: x, b: { ...x } }

a.a.v[0]++

a.b.v[0] += 2
console.log(a)