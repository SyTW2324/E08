class RandomNumberGenerator {
  // Método para generar un número aleatorio en el rango [min, max)
  static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Método para generar un número entero aleatorio en el rango [min, max]
  static getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Ejemplo de uso
const numeroDecimalAleatorio = RandomNumberGenerator.getRandomNumber(0, 1);
console.log("Número decimal aleatorio:", numeroDecimalAleatorio);

const numeroEnteroAleatorio = RandomNumberGenerator.getRandomInteger(1, 10);
console.log("Número entero aleatorio:", numeroEnteroAleatorio);
