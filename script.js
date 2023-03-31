function displayImage(imageUrl) {
  const img = document.createElement('img');  // create a new <img> element
  img.src = imageUrl;  // set the src attribute to the image URL
  document.body.appendChild(img);  // append the <img> element to the body of the HTML document
}
displayImage('https://images.app.goo.gl/D2iPYspD4QpfdqWV9');
