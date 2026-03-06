# Comprehensive Conflict Test Scenarios

This repository contains **HARDCORE** conflict scenarios to test your merge conflict resolution tool.

## 🔥 Conflict Scenarios

### 1. **Simple Line Conflicts** (simple-conflict.js)
- **Branches**: feature-a vs feature-b
- **Conflicts**:
  - Different greeting messages
  - Different function additions (multiply vs subtract/divide)
  - Version number conflicts
  - Export statement conflicts
  - Author field conflicts

**Test**: Merge feature-a into feature-b or vice versa

### 2. **Complex Class Conflicts** (complex-class.ts)
- **Branches**: feature-a vs feature-b
- **Conflicts**:
  - Constructor signature changes
  - Different class properties (maxUsers vs adminUsers)
  - Method signature changes (void vs boolean return)
  - Different method implementations
  - Interface property conflicts (role vs createdAt)
  - Version conflicts

**Test**: Merge feature-a into feature-b - requires understanding TypeScript types

### 3. **JSON Configuration Conflicts** (config.json)
- **Branches**: feature-a vs feature-b
- **Conflicts**:
  - Version numbers (1.1.0 vs 2.0.0)
  - Port numbers (3000 vs 8080)
  - Database host changes
  - New nested properties (ssl, poolSize, security)
  - Feature flags (analytics vs monitoring)
  - API configuration (rateLimit vs cors)

**Test**: Merge both branches - JSON structure conflicts are tricky!

### 4. **Python API Route Conflicts** (api-routes.py)
- **Branches**: feature-a vs feature-b
- **Conflicts**:
  - Import statements (logging vs functools)
  - API version (v2 vs v1.5)
  - Global configuration (MAX_PAGE_SIZE vs RATE_LIMIT)
  - Function decorators (@require_auth)
  - Function signatures (pagination vs search)
  - Return value structures
  - Port numbers (5000 vs 8000)
  - Additional routes (DELETE endpoint)

**Test**: Merge feature-a into feature-b - complex Python conflicts

### 5. **CSS Style Conflicts** (styles.css)
- **Branches**: feature-b vs main
- **Conflicts**:
  - CSS variable values (colors, sizes)
  - Different selectors (* box-sizing)
  - Font family changes
  - Background colors
  - Container max-width
  - Button styling (padding, hover effects)
  - Card styling (borders, shadows)

**Test**: Merge feature-b into main - CSS conflicts with specificity issues

### 6. **Large File Refactoring** (large-file.js)
- **Branches**: refactor vs main
- **Conflicts**:
  - Complete rewrite from CommonJS to ES6 modules
  - Function syntax changes (function() vs arrow functions)
  - Object structure reorganization
  - New utility categories
  - Version bump
  - Export style changes

**Test**: Merge refactor into main - MASSIVE structural changes

### 7. **Database Schema Evolution** (database.sql)
- **Branches**: refactor vs main
- **Conflicts**:
  - ID type changes (SERIAL vs UUID)
  - New columns added
  - New tables (comments)
  - Constraint additions
  - Index changes
  - Trigger functions added

**Test**: Merge refactor into main - SQL conflicts are complex!

### 8. **Java Class Conflicts** (nested-logic.java)
- **Branches**: Create your own conflicting changes!
- **Potential Conflicts**:
  - Import statements
  - Class constants
  - Method implementations
  - Stream operations
  - Data structure changes

## 🎯 Testing Strategy

### Level 1: Basic Conflicts
```bash
git checkout feature-a
git merge feature-b
# Resolve conflicts in simple-conflict.js
```

### Level 2: Intermediate Conflicts
```bash
git checkout feature-a
git merge feature-b
# Resolve conflicts in:
# - complex-class.ts (TypeScript types)
# - config.json (JSON structure)
# - api-routes.py (Python decorators)
```

### Level 3: Advanced Conflicts
```bash
git checkout main
git merge refactor
# Resolve conflicts in:
# - large-file.js (complete rewrite)
# - database.sql (schema evolution)
```

### Level 4: Multi-Branch Conflicts
```bash
# Create a merge commit from multiple branches
git checkout main
git merge feature-a feature-b refactor
# Resolve ALL conflicts at once!
```

### Level 5: Cherry-Pick Conflicts
```bash
git checkout main
git cherry-pick feature-a~1
# Resolve conflicts from specific commits
```

## 🧪 Edge Cases Included

1. **Whitespace Conflicts**: Different indentation styles
2. **Line Ending Conflicts**: CRLF vs LF
3. **Comment Conflicts**: Different comment styles
4. **Import Order Conflicts**: Different import organization
5. **Function Signature Conflicts**: Parameters, return types
6. **Type Conflicts**: TypeScript interface changes
7. **Configuration Conflicts**: Nested JSON objects
8. **SQL Conflicts**: Schema evolution with constraints
9. **Module System Conflicts**: CommonJS vs ES6
10. **Decorator Conflicts**: Python decorators
11. **CSS Specificity Conflicts**: Different selector approaches
12. **Version Conflicts**: Semantic versioning changes

## 🚀 How to Use This Repository

1. **Clone the repository**
2. **Try merging different branches**
3. **Use your AI tool to resolve conflicts**
4. **Verify the resolution makes sense**
5. **Test edge cases**

## 📊 Expected Outcomes

Your conflict resolution tool should:
- ✅ Detect all conflicts accurately
- ✅ Provide intelligent merge suggestions
- ✅ Handle syntax-aware merging
- ✅ Preserve code functionality
- ✅ Maintain proper formatting
- ✅ Handle multi-file conflicts
- ✅ Support multiple programming languages
- ✅ Provide risk assessment
- ✅ Allow manual override
- ✅ Generate clean merge commits

## 🔥 Hardcore Test Commands

```bash
# Test 1: Simple merge
git checkout feature-a && git merge feature-b

# Test 2: Three-way merge
git checkout main && git merge feature-a feature-b

# Test 3: Rebase conflicts
git checkout feature-a && git rebase main

# Test 4: Cherry-pick conflicts
git checkout main && git cherry-pick feature-b

# Test 5: Merge with strategy
git merge -X theirs feature-b

# Test 6: Octopus merge (multiple branches)
git merge feature-a feature-b refactor
```

## 💡 Tips for Testing

1. **Start Simple**: Begin with simple-conflict.js
2. **Progress Gradually**: Move to more complex files
3. **Test All Languages**: JS, TS, Python, Java, SQL, CSS
4. **Test All Scenarios**: Merge, rebase, cherry-pick
5. **Verify Results**: Run tests after resolution
6. **Check Syntax**: Ensure code is valid after merge
7. **Review Diffs**: Compare before/after carefully

## 🎓 Learning Outcomes

After testing with this repository, you'll have validated:
- Multi-language conflict resolution
- Complex structural changes
- Type system conflicts
- Configuration file merging
- Database schema evolution
- Module system migrations
- Decorator and annotation handling
- CSS specificity resolution

Good luck! 🚀
