import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Bill Culbertson',
      email: 'b**@gmail.com',
      dateCreated: '12/10/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100035750.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '61205',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 18, 2017',
        description: 'Maintenance fee - XXXXXX4475',
        status: 'Success',
        amount_usd: -125.0
      },
      {
        dateTime: 'December 23, 2017',
        description: 'Transfer from Federal deposit Insurance corp - XXXXXX5668',
        status: 'Success',
        amount_usd: 155104.54
      },

      {
        dateTime: 'November 10, 2017',
        description: 'Maintenance fee - XXXXXX2254',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'October 18, 2017',
        description: 'Maintenance fee - XXXXXX8075',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'October 20, 2017',
        description: 'Transfer fee - XXXXXX5668',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 20, 2017',
        description: 'Transfer to Daniel Craig - XXXXXX4507',
        status: 'Success',
        amount_usd: -5800.0
      },

      {
        dateTime: 'October 10, 2017',
        description: 'Transfer from Horizon Tech XXXXXX1256',
        status: 'Success',
        amount_usd: 1_750_215.53
      },

      {
        dateTime: 'October 4, 2017',
        description: 'Transfer from Lisa Fernandez XXXXXX3623',
        status: 'Success',
        amount_usd: 1_760_176.87
      },

      {
        dateTime: 'September 28, 2017',
        description: 'Transaction fee - XXXXXX6433',
        status: 'Success',
        amount_usd: -35.0
      },
      {
        dateTime: 'September 28, 2017',
        description: 'Transfer to Liam Brooks - XXXXXX9001',
        status: 'Success',
        amount_usd: -41500.0
      },

      {
        dateTime: 'September 18, 2017',
        description: 'Transfer fee - XXXXXX356',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 18, 2017',
        description: 'Transfer to Cohser Dee - XXXXXX2120',
        status: 'Success',
        amount_usd: -37950.0
      },

      {
        dateTime: 'August 25, 2017',
        description: 'Maintenance fee - XXXXXX35638',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'August 22, 2017',
        description: 'Asset Liquidation Co. - XXXXXX7362',
        status: 'Success',
        amount_usd: 35_011_228.76
      },

      {
        dateTime: 'August 12, 2017',
        description: 'Transfer fee - XXXXXX8654',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 12, 2017',
        description: 'Transfer to Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: -25345.0
      },

      {
        dateTime: 'August 10, 2017',
        description: 'Maintenance fee - XXXXXX2254',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'August 5, 2017',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'August 5, 2017',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 1_049_871.36
      },

      {
        dateTime: 'July 25, 2017',
        description: 'Maintenance fee - XXXXXX1070',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'July 8, 2017',
        description: 'Decedent Refund Group - XXXXXX9145',
        status: 'Success',
        amount_usd: 7_093_039.73
      },

      {
        dateTime: 'July 3, 2017',
        description: 'Transfer from PATRICK MILLER - XXXXXX0045',
        status: 'Success',
        amount_usd: 1_503_829.74
      },

      {
        dateTime: 'June 20, 2017',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 1_939_357.01
      },

      {
        dateTime: 'June 15, 2017',
        description: 'Tax Refund Receivables LLC - XXXXXX2567',
        status: 'Success',
        amount_usd: 11_982_211.61
      },

      {
        dateTime: 'June 12, 2017',
        description: 'Transfer fee - XXXXXX1126',
        status: 'Success',
        amount_usd: -80.0
      },

      {
        dateTime: 'June 5, 2017',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2017',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: -10500.0
      },

      {
        dateTime: 'May 25, 2017',
        description: 'Transaction fee - XXXXXX2327',
        status: 'Success',
        amount_usd: -35.0
      },
      {
        dateTime: 'May 25, 2017',
        description: 'Kinship Capital Holdings - XXXXXX8012',
        status: 'Success',
        amount_usd: -81600.0
      },

      {
        dateTime: 'May 25, 2017',
        description: 'Maintenance fee - XXXXXX3663',
        status: 'Success',
        amount_usd: -125.0
      },

      {
        dateTime: 'May 25, 2017',
        description: 'Transfer from Federal deposit Insurance corp  - XXXXXX8429',
        status: 'Success',
        amount_usd: 1_222_777.28
      },

      {
        dateTime: 'April 18, 2017',
        description: 'Maintenance fee - XXXXXX8075',
        status: 'Success',
        amount_usd: -125.0
      },
      {
        dateTime: 'April 12, 2017',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 1_760_176.87
      },
      {
        dateTime: 'March 15, 2017',
        description: 'Transfer from NovaTech Solutions XXXXXX6542',
        status: 'Success',
        amount_usd: 1_120_005.53
      },
      {
        dateTime: 'March 12, 2017',
        description: 'Succession Planning Group - XXXXXX3345',
        status: 'Success',
        amount_usd: 14_989_414.61
      },
      {
        dateTime: 'February 20, 2017',
        description: 'Transfer fee - XXXXXX2543',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 20, 2017',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 1_760_176.87
      },
      {
        dateTime: 'February 11, 2017',
        description: 'Transfer fee - XXXXXX4533',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2017',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'February 5, 2017',
        description: 'Transaction fee - XXXXXX2372',
        status: 'Success',
        amount_usd: -35.0
      },
      {
        dateTime: 'February 5, 2017',
        description: 'Family Legacy Holdings LLC - XXXXXX6789',
        status: 'Success',
        amount_usd: -80000.0
      },
      {
        dateTime: 'January 10, 2017',
        description: 'Maintenance fee - XXXXXX35638',
        status: 'Success',
        amount_usd: -125.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Ronnie Dunn Gene',
      email: 'r**@gmail.com',
      dateCreated: '12/14/2025', // m/d/y
      username: 'ronnie1953',
      password: 'Olga100'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 420000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '61205',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 5, 2025',
        description: 'Wire Transfer from Bank of America - x0932',
        status: 'Success',
        amount_usd: 419000.0
      },
      {
        dateTime: 'December 5, 2025',
        description: 'Credit Interest - XXXXXX2237',
        status: 'Success',
        amount_usd: 3000.86
      },
      {
        dateTime: 'December 5, 2025',
        description: 'Tfn withholding Tax - XXXXXX0745',
        status: 'Success',
        amount_usd: -2300.00
      },
      {
        dateTime: 'December 5, 2025',
        description: 'Bonus Interest - XXXXXX6544',
        status: 'Success',
        amount_usd: 700.18
      },
      {
        dateTime: 'December 5, 2025',
        description: 'Account Opening - XXXXXX4475',
        status: 'Success',
        amount_usd: 1550.0
      }
    ]
  }
];
