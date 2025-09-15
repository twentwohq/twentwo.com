# DNS Setup Instructions

## Google Workspace CNAME Record

To set up Google Workspace for your domain, add this CNAME record to your DNS settings:

**Name:** `226uucnmapgt`  
**Value:** `gv-4vzoncd7lhkbdx.dv.googlehosted.com`  
**TTL:** Set to default or lowest value available

### Instructions:
1. Log into your domain registrar's DNS management panel
2. Add a new CNAME record with the details above
3. Save the changes
4. DNS propagation may take up to 48 hours
5. Return to Google Workspace to verify the domain

### Verification:
After adding the record, you can verify it's working by running:
```bash
nslookup 226uucnmapgt.your-domain.com
```

Replace `your-domain.com` with your actual domain name.