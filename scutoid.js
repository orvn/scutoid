const math = require('mathjs');

class Scutoid {
  constructor(prismHeight, prismFaceLength, triangleDepth) {
    this.prismHeight = prismHeight;
    this.prismFaceLength = prismFaceLength;
    this.triangleDepth = triangleDepth;
  }

  volume() {
    let areaPentagon = (5 / 4) * math.pow(this.prismFaceLength, 2) / math.tan(math.pi / 5);
    let volumePentagonPrism = areaPentagon * this.prismHeight;
    let areaTriangle = 0.5 * math.pow((this.prismFaceLength / 2), 2);
    let volumeTrianglePrism = areaTriangle * this.triangleDepth;
    let volume = volumePentagonPrism - volumeTrianglePrism;
    return volume;
  }

  surface() {
    let areaPentagon = (5 / 4) * math.pow(this.prismFaceLength, 2) / math.tan(math.pi / 5);
    let areaHexagon = (3 * math.sqrt(3) / 2) * math.pow(this.prismFaceLength, 2);
    let areaTriangle = 0.5 * this.prismFaceLength * this.triangleDepth;
    let areaTrapezoidTotal = 4 * ((this.prismHeight + this.triangleDepth) / 2) * this.prismFaceLength;
    let surfaceArea = areaPentagon + areaHexagon + areaTriangle + areaTrapezoidTotal;
    return surfaceArea;
  }
}

module.exports = Scutoid;
