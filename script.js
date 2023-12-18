const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png'];

function startGame() {
  const username = document.getElementById('username').value;
  if (!username) {
    alert('Будь ласка, введіть ім\'я.');
    return;
  }

  const slotMachine = document.getElementById('slotMachine');
  slotMachine.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const image = createRandomImage();
    slotMachine.appendChild(image);
  }

  setTimeout(() => {
    checkResults();
  }, 500);
}

function createRandomImage() {
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const image = document.createElement('img');
  image.src = images[randomImageIndex];
  return image;
}

function checkResults() {
  const slotMachine = document.getElementById('slotMachine');
  const images = slotMachine.getElementsByTagName('img');

  if (images[0].src === images[1].src && images[1].src === images[2].src) {
    alert('Ви виграли!');
  } else {
    alert('Спробуйте ще раз.');
  }
}
