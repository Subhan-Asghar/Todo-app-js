const input = document.getElementById('input');
const btn = document.getElementById('btn');
var ulist = document.getElementById('ulist');

var savedata = () => {
    localStorage.setItem("data", ulist.innerHTML);
}

var getdata = () => {
    ulist.innerHTML = localStorage.getItem("data");
}

btn.addEventListener('click', () => {
    const a = input.value;
    if (a == "") {
        alert("Enter Something");
    } else {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let textSpan = document.createElement('span');
        textSpan.textContent = a;

        li.appendChild(checkbox);
        li.appendChild(textSpan);

        
        let span = document.createElement('span');
        span.innerHTML = " &#10006";
        li.appendChild(span);

        ulist.appendChild(li);
    }
    input.value = "";
    savedata();
});

ulist.addEventListener('click', (e) => {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

ulist.addEventListener('change', (e) => {
    if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
        let textSpan = e.target.nextSibling;
        if (e.target.checked) {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.color = "grey";
        } else {
            textSpan.style.textDecoration = "none";
            textSpan.style.color = "white";
        }
        savedata();
    }
});

getdata();
