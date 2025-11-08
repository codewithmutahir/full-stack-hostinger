# 🚂 Railway.app Deployment Guide

This guide will walk you through deploying your fullstack application (React + Express) to Railway.app for free.

## 📋 Prerequisites

1. A GitHub account
2. A Railway.app account (sign up at [railway.app](https://railway.app))
3. Your code pushed to a GitHub repository

---

## 🚀 Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for Railway deployment"
   ```

2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Sign Up / Log In to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Sign in with your GitHub account

### Step 3: Deploy the Server (Backend)

1. In Railway dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository
4. **IMPORTANT:** Railway will detect your project structure. You MUST configure it:
   - Click on the service that was created
   - Go to **Settings** tab
   - **CRITICAL:** Set **Root Directory** to `server` (this tells Railway where to find your server code)
   - The **Build Command** should auto-detect, but verify it's: `npm install`
   - The **Start Command** should auto-detect, but verify it's: `npm start`
   - Railway will automatically detect Node.js and use the correct builder
   - **Save** the settings

5. **Configure Environment Variables:**
   - Go to the **Variables** tab
   - Add: `PORT` (Railway will set this automatically, but you can verify)
   - Add: `CLIENT_URL` = `https://YOUR_CLIENT_RAILWAY_URL.up.railway.app` (you'll update this after deploying the client)

6. **Get the Server URL:**
   - Go to the **Settings** tab
   - Under **Networking**, you'll see a **Public Domain**
   - Copy this URL (e.g., `https://your-server-name.up.railway.app`)

### Step 4: Deploy the Client (Frontend)

1. In the same Railway project, click **"+ New"** → **"GitHub Repo"**
2. Select the same repository
3. **IMPORTANT:** Configure the client service:
   - Click on the newly created service
   - Go to **Settings** tab
   - **CRITICAL:** Set **Root Directory** to `client` (this tells Railway where to find your client code)
   - Set **Build Command** to: `npm install && npm run build`
   - Set **Start Command** to: `npx serve -s dist -l $PORT`
   - **Save** the settings

4. **Configure Environment Variables:**
   - Go to the **Variables** tab
   - Add: `VITE_API_URL` = `https://YOUR_SERVER_RAILWAY_URL.up.railway.app` (use the server URL from Step 3)
   - Railway will automatically set `PORT`

5. **Get the Client URL:**
   - Go to **Settings** → **Networking**
   - Copy the **Public Domain** URL

### Step 5: Update Server CORS Configuration

1. Go back to your **Server** service in Railway
2. Go to **Variables** tab
3. Update `CLIENT_URL` to your client's Railway URL (from Step 4)
   - Format: `https://your-client-name.up.railway.app`
   - If you have multiple origins, separate with commas: `https://url1.com,https://url2.com`

4. Railway will automatically redeploy when you update environment variables

### Step 6: Verify Deployment

1. Visit your client URL (e.g., `https://your-client-name.up.railway.app`)
2. You should see "Hello from client" and the message from your server
3. Check the browser console for any errors

---

## 🔧 Alternative: Using Railway CLI (Optional)

You can also deploy using Railway CLI:

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Link to existing project or create new one
railway link

# Deploy
railway up
```

---

## 💰 Free Tier Limits

Railway's free tier (Hobby plan) includes:
- **$5 credit per month** (enough for small projects)
- Automatic deployments from GitHub
- Custom domains
- Environment variables
- Logs and metrics

**Note:** If you exceed the free credit, you'll need to upgrade or optimize your usage.

---

## 🔍 Troubleshooting

### Issue: "Nixpacks was unable to generate a build plan" or "Build failed"
**This is the most common error!** It means Railway doesn't know which directory to build from.

**Solution:**
1. Go to your service in Railway dashboard
2. Click on **Settings** tab
3. Scroll down to **Root Directory**
4. Set it to either:
   - `server` for the backend service
   - `client` for the frontend service
5. Click **Save**
6. Railway will automatically redeploy

**Why this happens:** Your repository has both `server/` and `client/` folders, but Railway needs to know which one to build. The Root Directory setting tells Railway where your `package.json` is located.

### Issue: Build fails
- Check the **Deployments** tab for build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Make sure **Root Directory** is set correctly (see above)

### Issue: Client can't connect to server
- Verify `VITE_API_URL` is set correctly in client environment variables
- Check `CLIENT_URL` is set correctly in server environment variables
- Ensure both services are deployed and running
- Make sure both services have their **Root Directory** set correctly

### Issue: CORS errors
- Make sure `CLIENT_URL` in server includes your client's Railway URL
- Check that the URL format is correct (no trailing slashes)
- Verify the server service has the correct **Root Directory** set

### Issue: Port errors
- Railway automatically sets `PORT` environment variable
- Make sure your code uses `process.env.PORT` (already configured)

---

## 📝 Environment Variables Summary

### Server Service:
- `PORT` - Automatically set by Railway
- `CLIENT_URL` - Your client's Railway URL (e.g., `https://your-client.up.railway.app`)

### Client Service:
- `PORT` - Automatically set by Railway
- `VITE_API_URL` - Your server's Railway URL (e.g., `https://your-server.up.railway.app`)

---

## 🎉 You're Done!

Your application should now be live on Railway! Both services will automatically redeploy when you push changes to your GitHub repository.

---

## 📚 Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Railway Discord Community](https://discord.gg/railway)
- [Railway Pricing](https://railway.app/pricing)

---

**Need Help?** Check Railway's logs in the dashboard or reach out to their support team.

