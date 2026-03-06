# Quick Start Guide

## 🚀 Get Started in 30 Seconds

### Step 1: Check Available Branches
```bash
git branch -a
```

You should see:
- `main` - Base branch
- `feature-a` - Feature branch A
- `feature-b` - Feature branch B (conflicts with A)
- `refactor` - Major refactoring (conflicts everywhere)

### Step 2: Create Your First Conflict

```bash
# Try to merge feature-b into feature-a
git checkout feature-a
git merge feature-b
```

**BOOM!** 💥 You now have conflicts in:
- `simple-conflict.js`
- `complex-class.ts`
- `config.json`
- `api-routes.py`
- `styles.css`

### Step 3: Use Your Tool to Resolve

Now use your CodeCollab AI tool to:
1. Detect the conflicts
2. Analyze the changes
3. Get AI suggestions
4. Resolve intelligently
5. Commit the merge

### Step 4: Verify the Resolution

```bash
# Check if files are valid
node simple-conflict.js
# Check TypeScript
tsc --noEmit complex-class.ts
# Check Python syntax
python -m py_compile api-routes.py
```

## 🎯 Quick Test Scenarios

### Scenario 1: Simple Conflict (2 minutes)
```bash
git checkout feature-a
git merge feature-b
# Resolve simple-conflict.js only
git add simple-conflict.js
git commit -m "Resolved simple conflict"
```

### Scenario 2: JSON Conflict (3 minutes)
```bash
git checkout feature-a
git merge feature-b
# Resolve config.json
# This tests JSON structure merging
```

### Scenario 3: Complete Refactor (10 minutes)
```bash
git checkout main
git merge refactor
# Resolve large-file.js and database.sql
# This tests major structural changes
```

### Scenario 4: All Conflicts (15 minutes)
```bash
git checkout feature-a
git merge feature-b
# Resolve ALL conflicts
# This is the ultimate test!
```

## 🔥 Hardcore Mode

Want to test EVERYTHING at once?

```bash
# Reset to clean state
git checkout main
git branch -D test-branch 2>/dev/null
git checkout -b test-branch

# Merge ALL branches at once (Octopus merge)
git merge feature-a feature-b refactor

# Now resolve EVERYTHING! 😈
```

## 📝 What to Look For

When testing your tool, verify it can:

✅ **Detect** all conflict markers  
✅ **Parse** different file types correctly  
✅ **Understand** code structure (functions, classes, etc.)  
✅ **Suggest** intelligent resolutions  
✅ **Preserve** code functionality  
✅ **Maintain** proper syntax  
✅ **Handle** multi-line conflicts  
✅ **Resolve** nested conflicts  
✅ **Support** multiple languages  
✅ **Provide** risk assessment  

## 🐛 Common Issues

### Issue: "Already up to date"
**Solution**: You're on the wrong branch. Check with `git branch`

### Issue: "Merge conflict in..."
**Solution**: Perfect! That's what we want. Now use your tool!

### Issue: "No conflicts"
**Solution**: The branches are already merged. Reset with:
```bash
git merge --abort
git reset --hard origin/main
```

## 💡 Pro Tips

1. **Use `git status`** to see which files have conflicts
2. **Use `git diff`** to see the conflict markers
3. **Test one file at a time** when starting
4. **Commit after each resolution** to track progress
5. **Use `git log --graph`** to visualize branch history

## 🎓 Next Steps

1. ✅ Complete Quick Start scenarios
2. 📖 Read TEST_SCENARIOS.md for detailed tests
3. 🔥 Try hardcore multi-branch merges
4. 🧪 Test edge cases
5. 🚀 Deploy with confidence!

Happy testing! 🎉
