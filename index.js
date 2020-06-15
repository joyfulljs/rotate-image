export default function roateImage(img) {
    // rotate 90 degree
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalHeight;
    canvas.height = img.naturalWidth;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var ctx = canvas.getContext("2d");
    // ctx.save();
    ctx.translate(x, y);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.translate(-y, -x);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    // ctx.restore();
    return canvas.toDataURL("image/jpeg");
}
