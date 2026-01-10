# eNewsletter Manager

Standalone frontend for eNewsletter Archive Management System.

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server (port 3002)
npm run dev
```

## 🔗 Backend Connection

Connects to dashboard backend at `http://localhost:8888` via Vite proxy.

**Required**: Dashboard `netlify dev` must be running on port 8888.

## 📦 Environment Variables

Create `.env` file:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
```

## ⚠️ Local Only

This project is **NOT** pushed to repository. For local development only.

## 🔧 Tech Stack

- React 18
- Vite 5
- Vanilla CSS
- Fetch API (no axios)
