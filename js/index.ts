{
  type Currency = "GBP" | "USD" | "EUR";
  const showWelcomeMessage = (): void => {
    console.log("Hello");
  };
  const calculateResult = (contant: number, currency: Currency): number => {
    const GBP = 5.05;
    const EUR = 4.78;
    const USD = 4.82;
    switch (currency) {
      case "GBP":
        return contant / GBP;

      case "EUR":
        return contant / EUR;

      case "USD":
        return contant / USD;
    }
  };
  const showCurrentRate = (currency: Currency): number => {
    const GBP = 5.05;
    const EUR = 4.78;
    const USD = 4.82;
    switch (currency) {
      case "GBP":
        return GBP;

      case "EUR":
        return EUR;

      case "USD":
        return USD;
    }
  };

  const updateResultText = (result: number, currency: Currency) => {
    const amountElement = document.querySelector(".js-amount") as HTMLElement;
    amountElement.innerText = `${result.toFixed(2)} ${currency}`;
  };

  const updateRateText = (dayRate: number, currency: Currency): void => {
    const rate = document.querySelector(".js-rate") as HTMLElement;
    rate.innerText = `${" " + dayRate + " " + currency}`;
  };

  const onFormSubmit = (event: Event): void => {
    event.preventDefault();
    const plnElement = document.querySelector(".js-pln") as HTMLInputElement;
    const currencyElement = document.querySelector(
      ".js-currency"
    ) as HTMLSelectElement;
    if (plnElement && currencyElement) {
      const contant = +plnElement.value;
      const currency = currencyElement.value as Currency;
      const result = calculateResult(contant, currency);
      const dayRate = showCurrentRate(currency);
      updateRateText(dayRate, currency);
      updateResultText(result, currency);
      (document.querySelector(".js-formCurrency") as HTMLFormElement).reset();
    }
  };

  const init = (): void => {
    const formCurrencyElement = document.querySelector(
      ".js-formCurrency"
    ) as HTMLFormElement;
    formCurrencyElement.addEventListener("submit", onFormSubmit);
    showWelcomeMessage();
  };

  init();
}
