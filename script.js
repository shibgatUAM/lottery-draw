'use strict';

const namesInput = document.querySelector('#nameInput');
const drawBtn = document.querySelector('#drawBtn');
const winnerModal = document.querySelector('#winnerModal');
const winnerName = document.querySelector('#winnerName');
const closeModal = document.querySelector('#closeModal');
const namesPreview = document.querySelector('#namesPreview');
const spinner = document.querySelector('#spinner');
const confettiCanvas = document.querySelector('#confettiCanvas');

const ctx = confettiCanvas.getContext('2d');
