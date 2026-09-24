
export const orderScenarios = {
  normal: {
    id: "ORD-98421",
    status: "Out for Delivery",
    estimatedDelivery: "Today, 4:30 PM - 6:00 PM",
    product: { name: "Wireless Noise Cancelling Headphones", price: "$129.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
    timeline: [
      { title: "Order Placed", date: "Oct 24, 10:00 AM", completed: true },
      { title: "Processing", date: "Oct 24, 02:00 PM", completed: true },
      { title: "Shipped", date: "Oct 25, 09:00 AM", completed: true },
      { title: "Out for Delivery", date: "Today, 09:30 AM", completed: true, current: true },
      { title: "Delivered", date: "Estimated 5:00 PM", completed: false },
    ],
    alertType: null
  },
  delayed: {
    id: "ORD-98422",
    status: "Delayed",
    estimatedDelivery: "Delayed due to weather conditions",
    product: { name: "Smart Fitness Watch Series 5", price: "$199.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
    timeline: [
      { title: "Order Placed", date: "Oct 22, 10:00 AM", completed: true },
      { title: "Shipped", date: "Oct 23, 01:00 PM", completed: true },
      { title: "Out for Delivery", date: "Expected Yesterday", completed: false, current: true },
    ],
    alertType: "delayed",
    alertMessage: "Your package is experiencing a slight delay. We are working to get it to you as soon as possible."
  },
  notReceived: {
    id: "ORD-98423",
    status: "Delivered (Reported Missing)",
    estimatedDelivery: "Delivered yesterday at 2:15 PM",
    product: { name: "Ergonomic Office Chair", price: "$249.99", image: "https://images.unsplash.com/photo-1580481077494-e3299ac25e94?w=150" },
    timeline: [
      { title: "Order Placed", date: "Oct 20", completed: true },
      { title: "Shipped", date: "Oct 21", completed: true },
      { title: "Delivered", date: "Yesterday, 2:15 PM", completed: true, current: true },
    ],
    alertType: "notReceived",
    alertMessage: "System shows delivered, but you haven't received it? Let us investigate."
  },
  noTracking: {
    id: "ORD-98424",
    status: "Preparing Order",
    estimatedDelivery: "Calculated after shipping",
    product: { name: "Mechanical Gaming Keyboard", price: "$89.99", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150" },
    timeline: [],
    alertType: "noTracking",
    alertMessage: "Tracking information is not available yet. It usually updates within 24 hours of order placement."
  }
};