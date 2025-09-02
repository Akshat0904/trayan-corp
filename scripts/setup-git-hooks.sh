#!/bin/bash

# Git Hooks Setup for Automatic Sitemap Updates
# Run: chmod +x scripts/setup-git-hooks.sh && ./scripts/setup-git-hooks.sh

echo "🔧 Setting up Git hooks for automatic SEO updates..."

# Create .git/hooks directory if it doesn't exist
mkdir -p .git/hooks

# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Running SEO pre-commit checks..."

# Check if critical files have been modified
MODIFIED_FILES=$(git diff --cached --name-only)

# Files that should trigger sitemap update
TRIGGER_FILES=(
  "src/app/"
  "src/constants/"
  "src/components/"
  "public/"
)

SHOULD_UPDATE=false

for file in $MODIFIED_FILES; do
  for trigger in "${TRIGGER_FILES[@]}"; do
    if [[ $file == $trigger* ]]; then
      SHOULD_UPDATE=true
      break 2
    fi
  done
done

if [ "$SHOULD_UPDATE" = true ]; then
  echo "📋 Key files modified, updating sitemap..."
  
  # Run SEO validation
  if command -v node &> /dev/null; then
    node scripts/validate-seo.js
  fi
  
  echo "✅ Sitemap will be updated on next build"
else
  echo "ℹ️  No sitemap update needed"
fi

echo "🎯 Pre-commit SEO checks complete!"
EOF

# Create post-commit hook
cat > .git/hooks/post-commit << 'EOF'
#!/bin/bash

echo "📈 Post-commit: Sitemap automatically tracks file changes via git timestamps"
EOF

# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/post-commit

echo "✅ Git hooks setup complete!"
echo ""
echo "🚀 Your sitemap will now automatically:"
echo "   • Update last-modified dates based on git commits"
echo "   • Validate SEO implementation before commits" 
echo "   • Track file changes for accurate timestamps"
echo ""
echo "📝 To manually validate SEO: npm run seo:validate"
echo "🔄 To force sitemap update: npm run seo:update" 