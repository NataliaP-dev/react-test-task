const BASE_SERVER_URL = 'http://cors-anywhere.herokuapp.com/http://ws-old.parlament.ch';
let councillorsData = [];
const sortOptions = {};

function getCouncillorsRequest () {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'text/json');
    return fetch(`${BASE_SERVER_URL}/councillors?format=json`, {
       headers: myHeaders,
       mode: 'cors'
    }).then(res => res.json());
}

function renderCouncillorsRows(councillors = []) {
    const rows = councillors.map(el => {
        return `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.active ? 'Yes' : 'No'}</td>
        </tr>`
    });
    const tbody = document.querySelector('#result table tbody');
    tbody.innerHTML = rows.join('');
}

function sortColumn (columnName) {
    const direction = sortOptions[columnName] === 'asc' ? 'desc' : 'asc'
    sortOptions[columnName] = direction;

    councillorsData.sort((a, b) => {
        if (isNaN(a[columnName]) && isNaN(b[columnName])) {
            return direction === 'asc' 
                ? a[columnName].localeCompare(b[columnName])
                : b[columnName].localeCompare(a[columnName]);
        }
        return direction === 'asc' 
            ? a[columnName] - b[columnName] 
            : b[columnName] - a[columnName]}
        );

    renderCouncillorsRows(councillorsData);
};

function filterColumn (columnName, str) {
    const newData = councillorsData
        .filter(el => el[columnName].toString().toLowerCase().includes(str.toLowerCase()));

    renderCouncillorsRows(newData);
};

getCouncillorsRequest().then(el => {
    councillorsData = el;
    renderCouncillorsRows(el);
});