export const MOCK_DATA = [
  {
    id: 1,
    type: "in",
    name: "Morning Run",
    created_at: "2024-07-27T07:30:00Z",
    amount: 5,
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
    name: "Evening Ride",
    created_at: "2024-07-26T18:00:00Z",
    amount: 15,
    metadata: {
      calories: 600,
      distance: 20,
      elapsedTime: 3600,
      type: "Ride",
    },
  },
  {
    id: 3,
    type: "out",
    name: "Matcha Latte",
    created_at: "2024-07-25T09:00:00Z",
    amount: 3,
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
    metadata: {
      merchant: "McDonalds",
    },
  },
]

interface SportMetadata {
  calories: number
  distance: number
  elapsedTime: number
  type: "Run" | "Ride"
}

interface RewardMetadata {
  merchant: string
}

export interface Activity {
  id: number
  type: "out" | "in"
  name: string
  created_at: string
  amount: number
  metadata: {
    calories?: number
    distance?: number
    elapsedTime?: number
    type?: string
    merchant?: string
  }
}