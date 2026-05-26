// car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning index or -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw 'You need set a Car Class';
    }

    const currentIndex = GetCarArrPosition(carArr, carClass);

    if (el.checked) {
        if (currentIndex === -1) {
            if (carArr.length >= 2) {
                el.checked = false;
                ShowCompareLimitMessage();
                return;
            }
            carArr.push(carClass);
        }
    } else {
        if (currentIndex > -1) {
            carArr.splice(currentIndex, 1);
        }
    }

    if (document.getElementById('compare')?.style.display === 'block') {
        if (carArr.length < 2) {
            HideCompare();
        } else {
            UpdateCompareTable();
        }
    }
}

function ShowCompareLimitMessage() {
    const message = 'Você só pode comparar até 2 carros por vez.';
    const feedback = document.getElementById('compare-feedback');

    if (feedback) {
        feedback.textContent = message;
        feedback.classList.add('visible');
        setTimeout(() => {
            feedback.classList.remove('visible');
            feedback.textContent = '';
        }, 4000);
    } else {
        alert(message);
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert('Precisa marcar 2 carros para apresentar a comparação');
        return;
    }

    UpdateCompareTable();
    document.getElementById('compare').style.display = 'block';
}

function HideCompare() {
    document.getElementById('compare').style.display = 'none';
}

function UpdateCompareTable() {
    if (carArr.length !== 2) {
        return;
    }

    const [firstCar, secondCar] = carArr;

    document.getElementById('compare_image_0').innerHTML = `<img src="${firstCar.image}" alt="${firstCar.nome}" class="compare-car-image" />`;
    document.getElementById('compare_image_1').innerHTML = `<img src="${secondCar.image}" alt="${secondCar.nome}" class="compare-car-image" />`;
    document.getElementById('compare_modelo_0').textContent = firstCar.nome;
    document.getElementById('compare_modelo_1').textContent = secondCar.nome;
    document.getElementById('compare_alturacacamba_0').textContent = `${firstCar.alturaCacamba} mm`;
    document.getElementById('compare_alturacacamba_1').textContent = `${secondCar.alturaCacamba} mm`;
    document.getElementById('compare_alturaveiculo_0').textContent = `${firstCar.alturaVeiculo} mm`;
    document.getElementById('compare_alturaveiculo_1').textContent = `${secondCar.alturaVeiculo} mm`;
    document.getElementById('compare_alturasolo_0').textContent = `${firstCar.alturaSolo} mm`;
    document.getElementById('compare_alturasolo_1').textContent = `${secondCar.alturaSolo} mm`;
    document.getElementById('compare_capacidadecarga_0').textContent = `${firstCar.capacidadeCarga} kg`;
    document.getElementById('compare_capacidadecarga_1').textContent = `${secondCar.capacidadeCarga} kg`;
    document.getElementById('compare_motor_0').textContent = firstCar.motor;
    document.getElementById('compare_motor_1').textContent = secondCar.motor;
    document.getElementById('compare_potencia_0').textContent = `${firstCar.potencia} cv`;
    document.getElementById('compare_potencia_1').textContent = `${secondCar.potencia} cv`;
    document.getElementById('compare_volumecacamba_0').textContent = `${firstCar.volumeCacamba} L`;
    document.getElementById('compare_volumecacamba_1').textContent = `${secondCar.volumeCacamba} L`;
    document.getElementById('compare_roda_0').textContent = firstCar.roda;
    document.getElementById('compare_roda_1').textContent = secondCar.roda;
    document.getElementById('compare_preco_0').textContent = `R$ ${firstCar.preco.toLocaleString('pt-BR')}`;
    document.getElementById('compare_preco_1').textContent = `R$ ${secondCar.preco.toLocaleString('pt-BR')}`;
}
