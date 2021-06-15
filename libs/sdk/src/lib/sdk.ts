export class ESdk {
  banner(): void {
    console.log(this.bannerText());
  }

  bannerText(): string {
    return 'E-Square SDK';
  }
}
