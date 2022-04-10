export const BLOCKCHAIN = [
  // voter
  {
    address: "0xa21A16EC22a940990922220E4ab5bF4C2310F556",
    balance: 0,
    transactions: [
      // our vote coin goes to the party
      {
        to: "0x84b0bC1c7E031467f01AD6Fd73CDA616B610D413",
        from: "0xa21A16EC22a940990922220E4ab5bF4C2310F556",
        howMany: 1,
        date: "2022-01-17T12:17:32.101Z",
      },
      // we get right to vote by receiving vote coin
      {
        to: "0xa21A16EC22a940990922220E4ab5bF4C2310F556",
        from: "0x05DF284B55Dec293a52a951f2A59df932D599Ea2",
        howMany: 1,
        date: "2022-01-15T12:17:32.101Z",
      },
    ],
  },

  // party
  {
    address: "0x84b0bC1c7E031467f01AD6Fd73CDA616B610D413",
    partyName: "BAJAM",
    balance: 4,
    transactionsIn: [
      {
        from: "0xa21A16EC22a940990922220E4ab5bF4C2310F556",
        howMany: 1,
        date: "2022-01-17T12:17:32.101Z",
      },
      {
        from: "0x001a61213D72F2F3C95Ff743c80f472749AB8ad3",
        howMany: 1,
        date: "2022-01-17T13:17:32.101Z",
      },

      {
        from: "0xFD2043f00450ed34589DffEDC85875B9eE9855D9",
        howMany: 1,
        date: "2022-01-17T15:17:32.101Z",
      },
      {
        from: "0xCf625a90aa057b5f7657F05b8D2D91896CcDB5D8",
        howMany: 1,
        date: "2022-01-17T16:17:32.101Z",
      },
    ],
  },
];
