# 🌐 Decentralized Reputation System

A blockchain-based reputation system to **track and manage reputation scores** for Ethereum addresses using **Solidity**, **React**, and **ethers.js**. The platform ensures transparency, trust, and immutability of user reputations on-chain.

---

## 🚀 Features

- 🔗 Connect MetaMask wallet
- 📈 View real-time reputation score for connected address
- 🧾 Increase reputation score through on-chain transactions
- ⚡ Live updates for reputation changes
- 🖼️ Responsive UI with modern design (Glassmorphism + Gradient styling)

---

## 🛠 Technology Stack

| Layer              | Tech Used                |
|--------------------|--------------------------|
| Smart Contracts     | Solidity `^0.8.18`       |
| Frontend            | React `^19.1.0`          |
| Blockchain API      | ethers.js `^6.13.5`      |
| Styling             | CSS + Gradient, Glassmorphism |
| Network             | sepolia testnet   |

---

## 📁 Project Structure

decentralized-reputation-system/
├── contracts/               # Smart contract source files
│   └── reputation.sol       # Main reputation contract
├── frontend/                # React frontend application
│   └── src/
│       ├── App.js           # Main application component
│       └── App.css          # Styling
    




## 🔐 Smart Contract Details

**Contract File:** `contracts/reputation.sol`  
**Deployed Address:** `0x24b32bA77c1f9178EB560205F459e653b05624eD` (sepolia Testnet)

### Key Functionalities:

- ✅ Mapping Ethereum addresses to reputation scores
- ➕ Function to increase reputation
- 🔍 Function to query reputation by address
- 📣 Emits events when reputation changes

---

## 🧰 Getting Started

### ✅ Prerequisites

- Node.js >= 14.0.0
- MetaMask browser extension
- MATIC tokens on Mumbai testnet

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/MDARBAZ18/decentralized-reputation-system.git
cd decentralized-reputation-system

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
🔐 Environment Setup
Create a .env file in the root directory with the following:

ini
Copy
Edit
RPC_URL=your_SEPOLIA_rpc_url
🖥️ Running the Application
bash
Copy
Edit
# From the frontend directory
cd frontend
npm start
Visit: http://localhost:3000

📦 Deploying the Smart Contract
📤 Deployment
The frontend is ready for deployment on platforms like Vercel.
vercel.json handles build and routing setup automatically.

🤝 Contributing
Fork the repository

Create your branch
git checkout -b feature/your-feature

Commit your changes
git commit -m "Add your feature"

Push to GitHub
git push origin feature/your-feature

Open a Pull Request

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
OpenZeppelin for secure smart contract libraries

ethers.js for Ethereum interaction

React.js for frontend framework

👨‍💻 Author
Made with ❤️ by MD Arbaz
🔗 GitHub: @MDARBAZ18
📧 Email:mohdarbaz818181@gmail.com








