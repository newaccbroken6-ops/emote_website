# PowerShell Deployment script for Vercel
Write-Host "Preparing to deploy to Vercel..." -ForegroundColor Green

# Check if vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Deploy to Vercel
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "Deployment complete!" -ForegroundColor Green