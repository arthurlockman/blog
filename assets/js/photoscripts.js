const exifImageLoaded = (imageUrl, caption) => {
  const img = document.getElementById(imageUrl);
  window.exifr.parse(img).then(exif => {
    const exifContainer = document.getElementById(`${imageUrl}-exif`);
    const captionContainer = document.getElementById(`${imageUrl}-caption`);
    if (!!exif.LensModel && exif.LensModel.toLocaleLowerCase().includes('iphone')) {
      const cameraModelText = document.createElement('p');
      cameraModelText.style.marginBottom = '0';
      cameraModelText.innerText = `📱 ${exif.LensModel}`;
      exifContainer.appendChild(cameraModelText);
    } else {
      if (exif.Model) {
        const cameraModelText = document.createElement('p');
        cameraModelText.style.marginBottom = '0';
        cameraModelText.innerText = `📷 ${exif.Model}`;
        exifContainer.appendChild(cameraModelText);
      }
      if (exif.LensModel) {
        const cameraModelText = document.createElement('p');
        cameraModelText.style.marginBottom = '0';
        cameraModelText.innerHTML = `&emsp; ${convertLens(exif.LensModel)}`;
        exifContainer.appendChild(cameraModelText);
      }
    }
    if (!!exif.FNumber && !!exif.ExposureTime) {
      const exposureText = document.createElement('p');
      exposureText.style.marginBottom = '0';
      exposureText.innerHTML = `🕒 ${fraction(exif.ExposureTime)} sec @ f/${exif.FNumber}`;
      exifContainer.appendChild(exposureText);
    }
    if (exif.ISO) {
      const isoText = document.createElement('p');
      isoText.style.marginBottom = '0';
      isoText.innerHTML = `🎞️ ISO ${exif.ISO}`;
      exifContainer.appendChild(isoText);
    }
    if (exif.DateTimeOriginal) {
      const dateText = document.createElement('p');
      dateText.style.marginBottom = '0';
      dateText.innerHTML = `📅 ${moment(exif.DateTimeOriginal).format('YYYY-MM-DD HH:mm')}`;
      exifContainer.appendChild(dateText);
    }
    if (!!exif.latitude && !!exif.longitude) {
      const mapLink = document.createElement('a');
      mapLink.href = `http://maps.apple.com/?ll=${exif.latitude},${exif.longitude}&z=20&q=${caption}`;
      mapLink.target = '_blank';
      const mapImg = document.createElement('img');
      mapImg.src = `https://www.mapquestapi.com/staticmap/v5/map?zoom=15&size=400,100@2x&type=hyb&center=${exif.latitude},${exif.longitude}&imagetype=JPEG&key=zofk41Z77v9DEr0EhgHaQQoyw5yWoAUh&locations=${exif.latitude},${exif.longitude}|marker-green`;
      mapLink.appendChild(mapImg);
      captionContainer.appendChild(mapLink);
    }
  });
};

const HCF = (u, v) => {
  var U = u, V = v;
  while (true) {
    if (!(U%=V)) return V;
    if (!(V%=U)) return U
  }
};

//convert a decimal into a fraction
const fraction = (decimal) => {
  if(!decimal){
    decimal=this;
  }
  whole = String(decimal).split('.')[0];
  decimal = parseFloat('.'+String(decimal).split('.')[1]);
  num = '1';
  for(z=0; z<String(decimal).length-2; z++){
    num += '0';
  }
  decimal = decimal*num;
  num = parseInt(num);
  for(z=2; z<decimal+1; z++){
    if(decimal%z===0 && num%z===0){
      decimal = decimal/z;
      num = num/z;
      z=2;
    }
  }
  //if format of fraction is xx/xxx
  if (decimal.toString().length === 2 &&
    num.toString().length === 3) {
    //reduce by removing trailing 0's
    decimal = Math.round(Math.round(decimal)/10);
    num = Math.round(Math.round(num)/10);
  }
  //if format of fraction is xx/xx
  else if (decimal.toString().length === 2 &&
    num.toString().length === 2) {
    decimal = Math.round(decimal/10);
    num = Math.round(num/10);
  }
  //get highest common factor to simplify
  var t = HCF(decimal, num);

  //return the fraction after simplifying it
  return ((whole==='0')?'' : whole+' ')+((isNaN(decimal))?'' : decimal/t+'/'+num/t);
};

const convertLens = (lensExif) => {
  switch (lensExif) {
    case "35.0 mm f/1.4":
      return "Sigma 35mm f/1.4 Art"
      break;
    default:
      return lensExif;
  }
}