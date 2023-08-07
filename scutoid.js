const math = require('mathjs');

function scutoidVolume(prismHeight, prismFaceLength, triangleDepth) {
    let areaPentagon = (5 / 4) * Math.pow(prismFaceLength, 2) / Math.tan(Math.PI / 5);
    let volumePentagonPrism = areaPentagon * prismHeight;
    let areaTriangle = 0.5 * Math.pow((prismFaceLength / 2), 2);
    let volumeTrianglePrism = areaTriangle * triangleDepth;
    let volume = volumePentagonPrism - volumeTrianglePrism;
    return volume;
}

function scutoidSurface(prismHeight, prismFaceLength, triangleDepth) {
    let areaPentagon = (5 / 4) * Math.pow(prismFaceLength, 2) / Math.tan(Math.PI / 5);
    let areaHexagon = (3 * Math.sqrt(3) / 2) * Math.pow(prismFaceLength, 2);
    let areaTriangle = 0.5 * prismFaceLength * triangleDepth;
    let areaTrapezoidTotal = 4 * ((prismHeight + triangleDepth) / 2) * prismFaceLength;
    let surfaceArea = areaPentagon + areaHexagon + areaTriangle + areaTrapezoidTotal;
    return surfaceArea;
}
