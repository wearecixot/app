export const MOCK_DATA = [
  {
    id: 0,
    type: "in",
    name: "Morning Run",
    created_at: "2024-07-27T07:30:00Z",
    amount: 5,
    is_claimed: false,
    metadata: {
      calories: 300,
      distance: 5,
      elapsedTime: 1800,
      type: "Run",
    },
  },
  {
    id: 0.5,
    type: "in",
    name: "Morning Run",
    created_at: "2024-07-27T07:30:00Z",
    amount: 10,
    is_claimed: false,
    metadata: {
      calories: 300,
      distance: 5,
      elapsedTime: 1800,
      type: "Run",
    },
  },
  {
    id: 1,
    type: "in",
    name: "Morning Run",
    created_at: "2024-07-27T07:30:00Z",
    amount: 5,
    is_claimed: true,
    metadata: {
      calories: 300,
      distance: 5,
      elapsedTime: 1800,
      type: "Run",
    },
  },
  {
    id: 2,
    type: "in",
    name: "Commute",
    created_at: "2024-07-26T18:00:00Z",
    amount: 15,
    is_claimed: true,
    metadata: {
      in: "Stasiun Angke",
      out: "Stasiun Manggarai",
      type: "Commute",
    },
  },
  {
    id: 3,
    type: "out",
    name: "Matcha Latte",
    created_at: "2024-07-25T09:00:00Z",
    amount: 3,
    is_claimed: true,
    metadata: {
      merchant: "Starbucks",
    },
  },
  {
    id: 4,
    type: "out",
    name: "Croissant",
    created_at: "2024-07-24T14:30:00Z",
    amount: 10,
    is_claimed: true,
    metadata: {
      merchant: "Kopi Tuku",
    },
  },
  {
    id: 5,
    type: "in",
    name: "Weekend Run",
    created_at: "2024-07-23T08:00:00Z",
    amount: 7,
    is_claimed: true,
    metadata: {
      calories: 400,
      distance: 7,
      elapsedTime: 2400,
      type: "Run",
    },
  },
  {
    id: 6,
    type: "in",
    name: "Nasi Panas",
    created_at: "2024-07-22T12:00:00Z",
    amount: 12,
    is_claimed: true,
    metadata: {
      merchant: "McDonalds",
    },
  },
]

export interface Activity {
  id: number
  type: string
  name: string
  created_at: string
  amount: number
  is_claimed: boolean
  metadata: {
    in?: string
    out?: string
    calories?: number
    distance?: number
    elapsedTime?: number
    type?: string
    merchant?: string
  }
}

export const TIER_REWARDS = [
  ["The Coffee Beans", "Tomoro Coffee", "Kopi Kenangan"],
  ["Excelso", "Tomoro Coffee", "Kopi Kenangan"],
  ["Starbucks", "Tomoro Coffee", "Kopi Kenangan"],
]
