export default class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times = (multiplier: number): Franc => {
    return new Franc(this.amount * multiplier);
  };

  equals = (object: Object): boolean => {
    const franc: Franc = object as Franc;
    return this.amount === franc.amount;
  };
}
