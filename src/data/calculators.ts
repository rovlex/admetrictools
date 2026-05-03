export type CalculatorId = 'roas' | 'cpc' | 'ctr' | 'cpm';

type CalculatorInput = {
  id: string;
  label: string;
  placeholder: string;
  help: string;
};

type CalculatorOutput = {
  id: string;
  label: string;
};

type CalculatorFaq = {
  question: string;
  answer: string;
};

type ContentBlock = {
  heading: string;
  body: string;
};

type NamedDetail = {
  name: string;
  description: string;
};

type RelatedUse = {
  id: CalculatorId;
  text: string;
};

export type CalculatorConfig = {
  id: CalculatorId;
  path: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  inputs: CalculatorInput[];
  outputs: CalculatorOutput[];
  formulas: string[];
  formulaIntro: string;
  formulaNote?: string;
  variables: NamedDetail[];
  example: string;
  exampleSteps: string[];
  howToUse: string[];
  interpretation: ContentBlock[];
  platformNotes: ContentBlock[];
  commonMistakes: ContentBlock[];
  faq: CalculatorFaq[];
  useWith: RelatedUse[];
  related: CalculatorId[];
  cardText: string;
};

export const calculators: Record<CalculatorId, CalculatorConfig> = {
  roas: {
    id: 'roas',
    path: '/roas-calculator/',
    name: 'ROAS Calculator',
    shortName: 'ROAS',
    title: 'ROAS Calculator - Calculate Return on Ad Spend',
    description: 'Free ROAS calculator for ad revenue, ad spend, ROAS ratio, ROAS percentage, and break-even ROAS. Includes formula, example, and PPC FAQs.',
    h1: 'ROAS Calculator',
    intro: 'Calculate return on ad spend from revenue and ad spend. Add profit margin to estimate break-even ROAS and see whether the result is above or below break-even.',
    quickAnswer: 'ROAS measures how much revenue you generate for each dollar spent on advertising. The basic ROAS formula is ROAS = Revenue / Ad Spend. For example, $4,000 in revenue from $1,000 in ad spend equals 4.0x ROAS, or 400% ROAS.',
    inputs: [
      { id: 'revenue', label: 'Revenue', placeholder: '$10,000', help: 'Total revenue attributed to your ads.' },
      { id: 'adSpend', label: 'Ad Spend', placeholder: '$2,500', help: 'Total amount spent on the ads.' },
      { id: 'profitMargin', label: 'Profit Margin % (optional)', placeholder: '25%', help: 'Optional profit margin. You can enter 25, 25%, or 0.25.' }
    ],
    outputs: [
      { id: 'roasRatio', label: 'ROAS Ratio' },
      { id: 'roasPercentage', label: 'ROAS Percentage' },
      { id: 'breakEvenRoas', label: 'Break-even ROAS' },
      { id: 'profitabilityStatus', label: 'Profitability Status' }
    ],
    formulas: ['ROAS ratio = Revenue / Ad Spend', 'ROAS percentage = (Revenue / Ad Spend) × 100', 'Break-even ROAS = 1 / Profit Margin'],
    formulaIntro: 'Use the revenue attributed to a campaign and the ad spend from the same reporting period. This ROAS calculator shows both ratio format and percentage format so the result is easier to compare across reports.',
    formulaNote: 'For break-even ROAS, use profit margin as a decimal. For example, 25% profit margin is 0.25, so break-even ROAS is 4.0x.',
    variables: [
      { name: 'Revenue', description: 'Sales or conversion value attributed to your ads.' },
      { name: 'Ad Spend', description: 'The amount spent on the ads that generated the revenue.' },
      { name: 'Profit Margin', description: 'Optional margin used to estimate the ROAS needed to break even before other costs.' }
    ],
    example: 'If revenue is $10,000 and ad spend is $2,500, ROAS is 4.0x or 400%.',
    exampleSteps: ['Revenue = $10,000', 'Ad spend = $2,500', 'ROAS ratio = $10,000 / $2,500 = 4.0x', 'ROAS percentage = 4.0 × 100 = 400%'],
    howToUse: [
      'Enter the revenue or conversion value attributed to the campaign.',
      'Enter the ad spend from the same campaign and date range.',
      'Optionally add profit margin to estimate break-even ROAS.',
      'Compare the ROAS result with your target ROAS, margin, and growth goal.'
    ],
    interpretation: [
      { heading: 'ROAS ratio vs ROAS percentage', body: 'ROAS can be shown as a ratio or a percentage. A 4.0x ROAS is the same as 400% ROAS. Showing both formats avoids confusion when comparing Google Ads, Meta Ads, Amazon Ads, or ecommerce reports.' },
      { heading: 'ROAS is not the same as profit', body: 'ROAS compares revenue with ad spend. It does not automatically include product cost, shipping, refunds, platform fees, agency fees, or overhead. Use break-even ROAS to understand whether the result is likely to be profitable.' },
      { heading: 'Compare ROAS with volume', body: 'A high ROAS on a tiny budget may not matter as much as a slightly lower ROAS at meaningful scale. Always compare ROAS with spend, conversion volume, and business margin.' }
    ],
    platformNotes: [
      { heading: 'Facebook Ads ROAS calculator', body: 'For Facebook or Meta Ads, use purchase value or conversion value as revenue, and compare it with the spend from the same campaign, ad set, or ad.' },
      { heading: 'Amazon ROAS calculation', body: 'For Amazon Ads, ROAS usually compares attributed sales with campaign spend. Be consistent about the attribution window and whether you use gross sales or net sales.' },
      { heading: 'Google Ads ROAS', body: 'For Google Ads, use conversion value and cost from the same reporting view. If your account uses target ROAS bidding, compare actual ROAS with the target and with break-even ROAS.' }
    ],
    commonMistakes: [
      { heading: 'Mixing attribution windows', body: 'Do not compare revenue from one attribution window with ad spend from another. Keep campaign, date range, and attribution settings consistent.' },
      { heading: 'Treating revenue as profit', body: 'A 3x ROAS can still lose money if margins are low. Add profit margin or calculate break-even ROAS before deciding whether performance is good.' },
      { heading: 'Ignoring refunds and discounts', body: 'If possible, use revenue data that reflects discounts, returns, and cancellations. Inflated revenue makes ROAS look better than it really is.' },
      { heading: 'Comparing channels without context', body: 'Search, social, shopping, and display campaigns can have very different ROAS profiles. Compare results against the campaign objective, not just against a single universal benchmark.' }
    ],
    faq: [
      { question: 'What is ROAS?', answer: 'ROAS means return on ad spend. It compares revenue generated by advertising with the amount spent on those ads.' },
      { question: 'How do you calculate ROAS?', answer: 'To calculate ROAS, divide revenue by ad spend. For example, $10,000 in revenue divided by $2,500 in ad spend equals 4.0x ROAS.' },
      { question: 'Is 4x ROAS the same as 400% ROAS?', answer: 'Yes. A ROAS ratio of 4.0x means you generated four dollars of revenue for every one dollar of ad spend. As a percentage, that is 400% ROAS.' },
      { question: 'What is a good ROAS?', answer: 'A good ROAS depends on your margins, business model, channel, and growth goals. Start by comparing your ROAS with your break-even ROAS.' },
      { question: 'What is break-even ROAS?', answer: 'Break-even ROAS is the minimum ROAS needed to cover ad spend based on profit margin. With a 25% margin, break-even ROAS is 4.0x.' },
      { question: 'What is the difference between ROAS and ROI?', answer: 'ROAS focuses on revenue compared with ad spend. ROI usually considers profit and broader costs beyond the advertising spend itself.' },
      { question: 'Can ROAS be below 1?', answer: 'Yes. A ROAS below 1.0x means ad spend is higher than attributed revenue. That is usually a warning sign unless the campaign has a long-term or awareness objective.' }
    ],
    useWith: [
      { id: 'cpc', text: 'Use CPC to understand the click cost behind your ROAS.' },
      { id: 'ctr', text: 'Use CTR to see whether impressions are turning into clicks before revenue is measured.' },
      { id: 'cpm', text: 'Use CPM to compare the cost of reach and impressions across campaigns.' }
    ],
    related: ['cpc', 'ctr', 'cpm'],
    cardText: 'Calculate return on ad spend from revenue and ad spend.'
  },
  cpc: {
    id: 'cpc',
    path: '/cpc-calculator/',
    name: 'CPC Calculator',
    shortName: 'CPC',
    title: 'CPC Calculator - Calculate Cost Per Click',
    description: 'Free CPC calculator for Google Ads, Facebook Ads, Amazon Ads, and PPC campaigns. Calculate cost per click from ad spend and clicks.',
    h1: 'CPC Calculator',
    intro: 'Calculate cost per click from ad spend and clicks. Use the result to compare paid search, paid social, Amazon Ads, and display campaigns.',
    quickAnswer: 'CPC means cost per click. It shows the average amount you pay for one ad click. The CPC formula is CPC = Ad Spend / Clicks. If you spend $480 and receive 320 clicks, your CPC is $1.50 per click.',
    inputs: [
      { id: 'adSpend', label: 'Ad Spend', placeholder: '$500', help: 'Total amount spent on the ads.' },
      { id: 'clicks', label: 'Clicks', placeholder: '1,000', help: 'Total number of ad clicks.' }
    ],
    outputs: [{ id: 'cpc', label: 'CPC' }],
    formulas: ['CPC = Ad Spend / Clicks'],
    formulaIntro: 'Use total ad spend and total clicks from the same campaign, ad group, keyword, ad set, or reporting period. CPC is most useful when the spend and clicks come from the same source.',
    variables: [
      { name: 'Ad Spend', description: 'The total amount paid for the campaign, ad group, keyword, or ad set you are measuring.' },
      { name: 'Clicks', description: 'The number of paid ad clicks recorded for the same date range and reporting source.' }
    ],
    example: 'If ad spend is $500 and you received 1,000 clicks, CPC is $0.50.',
    exampleSteps: ['Ad spend = $500', 'Clicks = 1,000', 'CPC = $500 / 1,000', 'CPC = $0.50 per click'],
    howToUse: [
      'Enter the total amount spent on the ads.',
      'Enter the number of clicks from the same campaign or date range.',
      'Review the calculated average cost per click.',
      'Compare CPC with CTR, conversion rate, CPA, and ROAS before making bid decisions.'
    ],
    interpretation: [
      { heading: 'Lower CPC is not always better', body: 'A low CPC is useful only if the clicks are relevant. Cheap clicks that do not convert can produce worse results than more expensive clicks with stronger conversion rates.' },
      { heading: 'Compare CPC with CTR and ROAS', body: 'CPC explains click cost, but not click quality. Use CTR to understand ad response and ROAS to understand whether the traffic is turning into revenue.' },
      { heading: 'Use CPC for bidding and budget control', body: 'CPC is especially helpful when comparing keywords, audiences, ads, or placements. It can show where traffic is expensive before you evaluate conversions.' }
    ],
    platformNotes: [
      { heading: 'Google Ads CPC calculator', body: 'For Google Ads, use cost and clicks from the same campaign, ad group, keyword, or search term report. Avoid mixing search, display, and shopping data unless you want a blended CPC.' },
      { heading: 'Facebook Ads CPC calculator', body: 'For Facebook or Meta Ads, be clear about whether you are using link clicks, outbound clicks, or all clicks. Different click definitions can produce different CPC values.' },
      { heading: 'Amazon Ads CPC', body: 'For Amazon Ads, calculate CPC from campaign spend and paid clicks. Then compare it with conversion rate, average order value, and advertising cost of sales.' }
    ],
    commonMistakes: [
      { heading: 'Mixing date ranges', body: 'Do not use spend from one date range and clicks from another. CPC is accurate only when both values cover the same period.' },
      { heading: 'Comparing different click types', body: 'Some platforms report link clicks, outbound clicks, all clicks, or paid clicks. Use the same click definition when comparing campaigns.' },
      { heading: 'Judging performance by CPC alone', body: 'A lower CPC can still be worse if conversion rate or revenue per click is weak. Always connect CPC to business outcomes.' },
      { heading: 'Using tiny samples', body: 'A few clicks can make CPC look unusually high or low. Wait for enough traffic before making major bidding decisions.' }
    ],
    faq: [
      { question: 'What is CPC?', answer: 'CPC means cost per click. It shows how much you pay on average for each ad click.' },
      { question: 'How do you calculate CPC?', answer: 'To calculate CPC, divide total ad spend by total clicks.' },
      { question: 'What is a good CPC?', answer: 'A good CPC depends on the ad platform, competition, conversion rate, average order value, and target profitability.' },
      { question: 'How can I lower CPC?', answer: 'You can often lower CPC by improving ad relevance, testing better creative, refining targeting, improving quality signals, and removing weak placements or keywords.' },
      { question: 'What is the difference between CPC and CPM?', answer: 'CPC measures cost per click. CPM measures cost per thousand impressions.' },
      { question: 'Is CPC the same as PPC?', answer: 'No. PPC is a pricing model or advertising category, while CPC is the metric that shows the average cost of each click.' },
      { question: 'Can CPC be zero?', answer: 'CPC can be zero only if there is no cost attached to the clicks. In paid advertising reports, a zero CPC usually means the spend is zero, the clicks are zero, or the data needs checking.' }
    ],
    useWith: [
      { id: 'ctr', text: 'Use CTR to see whether your ads are generating clicks from impressions.' },
      { id: 'cpm', text: 'Use CPM to compare click cost with impression cost.' },
      { id: 'roas', text: 'Use ROAS to connect your CPC and traffic cost with revenue.' }
    ],
    related: ['ctr', 'cpm', 'roas'],
    cardText: 'Calculate average cost per click from spend and clicks.'
  },
  ctr: {
    id: 'ctr',
    path: '/ctr-calculator/',
    name: 'CTR Calculator',
    shortName: 'CTR',
    title: 'CTR Calculator - Calculate Click-Through Rate',
    description: 'Free CTR calculator to calculate click-through rate from clicks and impressions. Includes CTR formula, example, benchmarks, and PPC FAQs.',
    h1: 'CTR Calculator',
    intro: 'Calculate click-through rate from clicks and impressions. Use CTR to understand how often impressions turn into clicks.',
    quickAnswer: 'CTR means click-through rate. It is the percentage of impressions that turn into clicks. The CTR formula is CTR = (Clicks / Impressions) × 100. If an ad gets 75 clicks from 6,000 impressions, the CTR is 1.25%.',
    inputs: [
      { id: 'clicks', label: 'Clicks', placeholder: '500', help: 'Total number of ad clicks.' },
      { id: 'impressions', label: 'Impressions', placeholder: '25,000', help: 'Total number of ad impressions.' }
    ],
    outputs: [{ id: 'ctr', label: 'CTR' }],
    formulas: ['CTR = (Clicks / Impressions) × 100'],
    formulaIntro: 'Use clicks and impressions from the same ad, campaign, keyword, email, video, or reporting period. CTR is always displayed as a percentage.',
    variables: [
      { name: 'Clicks', description: 'The number of times people clicked the ad, link, search result, email link, or video thumbnail.' },
      { name: 'Impressions', description: 'The number of times the ad, link, search result, email, or video thumbnail was shown.' }
    ],
    example: 'If you got 500 clicks from 25,000 impressions, CTR is 2%.',
    exampleSteps: ['Clicks = 500', 'Impressions = 25,000', 'CTR = (500 / 25,000) × 100', 'CTR = 2%'],
    howToUse: [
      'Enter the total number of clicks.',
      'Enter the total number of impressions from the same source and date range.',
      'Review the click-through rate percentage.',
      'Use the result to compare ad creative, keywords, audiences, emails, or video thumbnails.'
    ],
    interpretation: [
      { heading: 'CTR measures response, not revenue', body: 'A high CTR means people are clicking after seeing the ad or link. It does not prove that the clicks convert, generate revenue, or produce profit.' },
      { heading: 'CTR benchmarks depend on context', body: 'A good CTR varies by channel, format, audience, and intent. Search ads, display ads, emails, and YouTube thumbnails should not be compared with one universal benchmark.' },
      { heading: 'Use CTR with CPC and conversion rate', body: 'CTR can help diagnose ad relevance. To judge performance, pair it with CPC, conversion rate, CPA, and ROAS.' }
    ],
    platformNotes: [
      { heading: 'Email CTR calculator', body: 'For email, CTR usually compares link clicks with delivered emails or opened emails depending on the report. Be consistent about which denominator you use.' },
      { heading: 'YouTube CTR calculator', body: 'For YouTube, thumbnail or video CTR compares clicks or views with impressions. Use it to evaluate titles, thumbnails, and audience fit.' },
      { heading: 'Ads CTR benchmarks', body: 'Paid search, paid social, display, and shopping campaigns can have very different CTR ranges. Compare similar campaign types instead of using one broad average.' }
    ],
    commonMistakes: [
      { heading: 'Confusing impressions with reach', body: 'Impressions count how many times something was shown. Reach counts unique people. CTR should usually use impressions, not reach.' },
      { heading: 'Comparing unrelated channels', body: 'Email CTR, YouTube CTR, search ad CTR, and display CTR are not directly equivalent. Compare within similar formats.' },
      { heading: 'Ignoring conversion quality', body: 'A high CTR can attract low-quality traffic if the ad overpromises or targets the wrong audience.' },
      { heading: 'Using mismatched click definitions', body: 'Some platforms separate link clicks, outbound clicks, all clicks, and unique clicks. Use the same definition across comparisons.' }
    ],
    faq: [
      { question: 'What is CTR?', answer: 'CTR means click-through rate. It shows the percentage of impressions that resulted in clicks.' },
      { question: 'How do you calculate CTR?', answer: 'To calculate CTR, divide clicks by impressions and multiply by 100.' },
      { question: 'What is a good CTR?', answer: 'A good CTR depends on the channel, campaign type, audience, ad format, and search intent.' },
      { question: 'Why is CTR important?', answer: 'CTR helps you understand whether people are responding to your ad after seeing it.' },
      { question: 'What is the difference between CTR and conversion rate?', answer: 'CTR measures clicks divided by impressions. Conversion rate measures conversions divided by clicks or sessions.' },
      { question: 'Can CTR be higher than 100%?', answer: 'CTR is usually not higher than 100%. If clicks are higher than impressions, check whether the platform is using different click and impression definitions.' },
      { question: 'Is a higher CTR always better?', answer: 'Not always. A higher CTR is useful only if the clicks are relevant and support conversions, revenue, or another campaign goal.' }
    ],
    useWith: [
      { id: 'cpc', text: 'Use CPC to understand the cost of the clicks behind your CTR.' },
      { id: 'roas', text: 'Use ROAS to see whether traffic from those clicks is producing revenue.' },
      { id: 'cpm', text: 'Use CPM to compare the cost of impressions before clicks happen.' }
    ],
    related: ['cpc', 'roas', 'cpm'],
    cardText: 'Calculate click-through rate from clicks and impressions.'
  },
  cpm: {
    id: 'cpm',
    path: '/cpm-calculator/',
    name: 'CPM Calculator',
    shortName: 'CPM',
    title: 'CPM Calculator - Calculate Cost Per Thousand Impressions',
    description: 'Free CPM calculator to calculate cost per thousand impressions from ad spend and impressions. Includes CPM formula, example, and PPC FAQs.',
    h1: 'CPM Calculator',
    intro: 'Calculate cost per thousand impressions from ad spend and impressions. Use CPM to compare the cost of reach across ad campaigns.',
    quickAnswer: 'CPM means cost per thousand impressions. It shows how much you pay for 1,000 ad impressions. The CPM formula is CPM = (Ad Spend / Impressions) × 1,000. If you spend $600 for 150,000 impressions, CPM is $4.00.',
    inputs: [
      { id: 'adSpend', label: 'Ad Spend', placeholder: '$1,000', help: 'Total amount spent on the ads.' },
      { id: 'impressions', label: 'Impressions', placeholder: '200,000', help: 'Total number of ad impressions.' }
    ],
    outputs: [{ id: 'cpm', label: 'CPM' }],
    formulas: ['CPM = (Ad Spend / Impressions) × 1,000', 'Ad Spend = (CPM × Impressions) / 1,000', 'Impressions = (Ad Spend / CPM) × 1,000'],
    formulaIntro: 'Use ad spend and impressions from the same campaign, platform, and reporting period. CPM is most useful when comparing the cost of reach or awareness across campaigns.',
    variables: [
      { name: 'Ad Spend', description: 'The total amount spent on the impression-based campaign or placement.' },
      { name: 'Impressions', description: 'The number of times the ad was shown. CPM uses impressions, not reach or clicks.' }
    ],
    example: 'If ad spend is $1,000 and impressions are 200,000, CPM is $5.00.',
    exampleSteps: ['Ad spend = $1,000', 'Impressions = 200,000', 'CPM = ($1,000 / 200,000) × 1,000', 'CPM = $5.00 per 1,000 impressions'],
    howToUse: [
      'Enter the total amount spent on the campaign.',
      'Enter the total number of impressions from the same report.',
      'Review the cost per 1,000 impressions.',
      'Compare CPM with CPC and CTR to understand whether cheap impressions are producing useful traffic.'
    ],
    interpretation: [
      { heading: 'CPM is best for reach and awareness', body: 'CPM helps compare the price of impressions. It is most useful for awareness, reach, display, video, and upper-funnel campaigns.' },
      { heading: 'Low CPM does not guarantee efficient traffic', body: 'Cheap impressions can still perform poorly if CTR is low or the audience is not relevant. Use CTR and CPC to evaluate whether impressions are turning into clicks.' },
      { heading: 'Use reverse CPM formulas for planning', body: 'Once you know CPM, you can estimate budget or impressions. For example, ad spend equals CPM multiplied by impressions, divided by 1,000.' }
    ],
    platformNotes: [
      { heading: 'YouTube CPM calculator', body: 'For YouTube campaigns, CPM can help compare the cost of video impressions across audiences, creatives, and placements.' },
      { heading: 'Google Ads CPM calculator', body: 'For Google Ads display or video campaigns, use campaign cost and impressions from the same date range to calculate CPM.' },
      { heading: 'CPM budget calculator', body: 'To estimate budget from CPM, multiply CPM by target impressions and divide by 1,000. This is useful when planning awareness campaigns.' }
    ],
    commonMistakes: [
      { heading: 'Forgetting the 1,000 multiplier', body: 'CPM is cost per 1,000 impressions. Dividing cost by impressions gives cost per impression, not CPM.' },
      { heading: 'Using reach instead of impressions', body: 'Reach counts unique people. Impressions count total ad views. CPM calculations should use impressions.' },
      { heading: 'Ignoring CTR', body: 'A low CPM may look efficient, but if CTR is extremely low, the campaign may still be poor at generating traffic.' },
      { heading: 'Comparing different campaign objectives', body: 'Awareness, prospecting, retargeting, video, and search campaigns can have very different CPM ranges. Compare similar campaigns when possible.' }
    ],
    faq: [
      { question: 'What is CPM?', answer: 'CPM means cost per thousand impressions. It shows how much you pay for 1,000 ad impressions.' },
      { question: 'How do you calculate CPM?', answer: 'To calculate CPM, divide ad spend by impressions and multiply by 1,000.' },
      { question: 'What does a $5 CPM mean?', answer: 'A $5 CPM means you pay $5 for every 1,000 impressions.' },
      { question: 'What is a good CPM?', answer: 'A good CPM depends on the channel, audience, placement, creative quality, and campaign objective.' },
      { question: 'When should I use CPM?', answer: 'CPM is useful when you compare the cost of reach, awareness, or impression-based campaigns.' },
      { question: 'What is the difference between CPM and CPC?', answer: 'CPM measures cost per thousand impressions. CPC measures cost per click.' },
      { question: 'How do I calculate impressions from CPM and budget?', answer: 'Use this formula: impressions = (ad spend / CPM) × 1,000. For example, $500 at a $5 CPM buys about 100,000 impressions.' }
    ],
    useWith: [
      { id: 'cpc', text: 'Use CPC to understand the cost of clicks after impressions are served.' },
      { id: 'ctr', text: 'Use CTR to see whether impressions are turning into clicks.' },
      { id: 'roas', text: 'Use ROAS to connect impression and click costs with revenue.' }
    ],
    related: ['cpc', 'ctr', 'roas'],
    cardText: 'Calculate cost per thousand impressions from spend and impressions.'
  }
};

export const calculatorList = [calculators.cpc, calculators.ctr, calculators.roas, calculators.cpm];
