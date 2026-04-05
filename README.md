🧠 Goal

You have many products (194)
You want to show 10 per page

📦 Step 1: Understand Pages

If:

Total products = 100
Per page = 10

👉 Then:

100 / 10 = 10 pages

That’s why we do:

const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

👉 Math.ceil means:

If 101 products → 10.1 → becomes 11 pages

🧠 Step 2: Current Page

const [currentPage, setCurrentPage] = useState(0);

👉 Pages internally start from:

0 = Page 1
1 = Page 2
2 = Page 3

🧠 Step 3: Main Formula (VERY IMPORTANT)
const start = currentPage * PAGE_SIZE;
const end = start + PAGE_SIZE;
🔍 Let’s visualize
👉 PAGE 1 (currentPage = 0)
start = 0 * 10 = 0
end = 0 + 10 = 10

👉 Show:

products[0] to products[9]
👉 PAGE 2 (currentPage = 1)
start = 1 * 10 = 10
end = 10 + 10 = 20

👉 Show:

products[10] to products[19]
👉 PAGE 3 (currentPage = 2)
start = 2 * 10 = 20
end = 20 + 10 = 30

👉 Show:

products[20] to products[29]
✂️ Step 4: slice() (THE HERO 🔥)
products.slice(start, end)

👉 It means:
“Give me items from index start → end (not included)”

Example:
products.slice(10, 20)

👉 Gives:

index 10 to 19
🔁 Step 5: How UI works
When user clicks page 2:
onClick={() => setCurrentPage(1)}

👉 Then:

currentPage becomes 1
React re-renders
New start/end calculated
New products shown
🎯 Full Flow (Simple)
Fetch all products ✅
Calculate pages ✅
User clicks page number ✅
Update currentPage ✅
Use slice() to show only that part ✅
🧃 Think Like This (Easy Trick)

Imagine products like this:

[🍎 🍌 🍇 🍉 🍒 🍍 🥭 🍑 🍓 🍊 | 🍕 🍔 🌮 🍟 🍗 🍩 ...]

Each page = 10 items

👉 Page 1 → first 10
👉 Page 2 → next 10
👉 Page 3 → next 10
