function displayImage(imageUrl) {
  const img = document.createElement('img');  // create a new <img> element
  img.src = imageUrl;  // set the src attribute to the image URL
  document.body.appendChild(img);  // append the <img> element to the body of the HTML document
}
displayImage('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80');
