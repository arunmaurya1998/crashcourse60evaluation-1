let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";

let root = document.querySelector("#root");

let fetchButton = document.querySelector("#fetch");

let div = document.querySelector("#container")



fetchButton.addEventListener("click", function () {
  showData();
});

async function showData() {
  let res = await fetch(url);

  let data = await res.json();
  finalData = data.data;
  getData(finalData);
}

function getData() {
  finalData.map((ele, i) => {

    let table = document.createElement("table");
    table.id = "datatable"

    let Id_colume = document.createElement("td");
    Id_colume.innerText = ele.id;
    Id_colume.id = "id"
    

    let name_colume = document.createElement("td");
    name_colume.innerText = ele.name;
    name_colume.id = "name"


    let gender_colume = document.createElement("td");
    gender_colume.innerText = ele.gender;
    gender_colume.id = "gender"

    let department_colume = document.createElement("td");
    department_colume.innerText = ele.department;
    department_colume.id = "departmant"

    let salary_colume = document.createElement("td");
    salary_colume.innerText = ele.salary;
    salary_colume.id = "salary"

    table.append(Id_colume,name_colume, gender_colume,department_colume,salary_colume);
    div.append(table);
    root.append(div);
  });
}
