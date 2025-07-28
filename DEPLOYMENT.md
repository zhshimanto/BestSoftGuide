# 🚀 Hostinger Deployment Guide

This guide will help you set up automatic deployment from GitHub to Hostinger for your BestSoftGuide project.

## 📋 Prerequisites

1. **Hostinger Account** with hosting plan
2. **GitHub Repository** (already set up)
3. **FTP Access** to your Hostinger account

## 🔧 Method 1: GitHub Actions Auto-Deploy (Recommended)

### Step 1: Get Hostinger FTP Credentials

1. Log into your **Hostinger Control Panel**
2. Go to **Files** → **File Manager**
3. Note down your FTP credentials:
   - **Server**: Usually `files.000webhost.com` or similar
   - **Username**: Your hosting username
   - **Password**: Your hosting password

### Step 2: Set GitHub Secrets

1. Go to your GitHub repository: `https://github.com/zhshimanto/BestSoftGuide`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:

```
HOSTINGER_FTP_SERVER = your-ftp-server.com
HOSTINGER_FTP_USERNAME = your-username
HOSTINGER_FTP_PASSWORD = your-password
```

### Step 3: Enable GitHub Actions

The workflow file is already created at `.github/workflows/deploy.yml`. 

**What it does:**
- ✅ Automatically triggers on push to `main` branch
- ✅ Installs dependencies
- ✅ Builds the static site
- ✅ Deploys to your Hostinger `public_html` folder

## 🔧 Method 2: Manual Deployment

### Step 1: Build the Project

```bash
npm run generate
```

### Step 2: Upload Files

1. The built files will be in `.output/public/` folder
2. Upload **all contents** of `.output/public/` to your Hostinger `public_html` folder
3. You can use:
   - **Hostinger File Manager**
   - **FTP Client** (FileZilla, WinSCP)
   - **Command line FTP**

## 🔧 Method 3: Using Hostinger Git Integration

### Step 1: Enable Git in Hostinger

1. Go to **Hostinger Control Panel**
2. Find **Git** or **Version Control** section
3. Connect your GitHub repository

### Step 2: Set Build Commands

```bash
# Install dependencies
npm ci

# Build the project
npm run generate

# Copy files to public_html
cp -r .output/public/* public_html/
```

## 📁 File Structure After Deployment

Your Hostinger `public_html` should contain:
```
public_html/
├── index.html
├── _nuxt/
│   ├── css/
│   └── js/
├── assets/
└── favicon.ico
```

## 🌐 Domain Setup

1. **Point your domain** to Hostinger nameservers
2. **Add domain** in Hostinger control panel
3. **Enable SSL** for HTTPS
4. **Test the site** at your domain

## 🔍 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules .nuxt .output
npm install
npm run generate
```

### FTP Upload Issues
- Check FTP credentials
- Ensure you're uploading to `public_html`
- Check file permissions (755 for folders, 644 for files)

### Site Not Loading
- Check if `index.html` exists in `public_html`
- Verify domain DNS settings
- Check Hostinger error logs

## 📝 Deployment Checklist

- [ ] GitHub secrets configured
- [ ] Domain pointed to Hostinger
- [ ] SSL certificate enabled
- [ ] Files uploaded to `public_html`
- [ ] Site accessible via domain
- [ ] All pages working correctly

## 🚀 Quick Deploy Command

```bash
npm run deploy
```

This will build your project and remind you to upload the files.

## 📞 Support

If you encounter issues:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Review GitHub Actions logs
4. Check this deployment guide

---

**Your BestSoftGuide site will be live at your domain once deployed!** 🎉
