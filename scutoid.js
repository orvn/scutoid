const math = require('mathjs');

class Scutoid {
  constructor(prismHeight, prismFaceLength, triangleDepth) {
    this.prismHeight = prismHeight;
    this.prismFaceLength = prismFaceLength;
    this.triangleDepth = triangleDepth;
    this.halfPrismFaceLength = prismFaceLength / 2;
  }

  pentagonArea() {
    return (5 / 4) * math.pow(this.prismFaceLength, 2) / math.tan(math.pi / 5);
  }

  triangleArea() {
    return 0.5 * math.pow(this.halfPrismFaceLength, 2);
  }

  hexagonArea() {
    return (3 * math.sqrt(3) / 2) * math.pow(this.prismFaceLength, 2);
  }

  volume() {
    let areaPentagon = this.pentagonArea();
    let volumePentagonPrism = areaPentagon * this.prismHeight;
    let areaTriangle = this.triangleArea();
    let volumeTrianglePrism = areaTriangle * this.triangleDepth;
    return volumePentagonPrism - volumeTrianglePrism;
  }

  surface() {
    let areaPentagon = this.pentagonArea();
    let areaHexagon = this.hexagonArea();
    let areaTriangle = 0.5 * this.prismFaceLength * this.triangleDepth;
    let areaTrapezoidTotal = 4 * ((this.prismHeight + this.triangleDepth) / 2) * this.prismFaceLength;
    return areaPentagon + areaHexagon + areaTriangle + areaTrapezoidTotal;
  }
}

module.exports = Scutoid;
