#!/bin/bash

# Conflict Testing Suite - Automated Test Runner
# This script helps you quickly test different conflict scenarios

echo "🔥 Conflict Testing Suite 🔥"
echo "=============================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to show menu
show_menu() {
    echo "Select a test scenario:"
    echo ""
    echo "  1) Simple Merge (feature-a + feature-b) - ⭐ Easy"
    echo "  2) Refactor Merge (main + refactor) - ⭐⭐⭐⭐⭐ Extreme"
    echo "  3) Octopus Merge (ALL branches) - 🔥 HARDCORE"
    echo "  4) Rebase Test (feature-a onto feature-b)"
    echo "  5) Cherry-pick Test"
    echo "  6) Show Branch Status"
    echo "  7) Reset to Clean State"
    echo "  8) Exit"
    echo ""
}

# Function to reset repository
reset_repo() {
    echo -e "${YELLOW}Resetting repository to clean state...${NC}"
    git reset --hard HEAD
    git clean -fd
    git checkout main
    echo -e "${GREEN}✓ Repository reset complete${NC}"
}

# Function to show status
show_status() {
    echo -e "${YELLOW}Current Branch Status:${NC}"
    git branch -v
    echo ""
    echo -e "${YELLOW}Commit Graph:${NC}"
    git log --all --oneline --graph --decorate -10
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice (1-8): " choice
    echo ""
    
    case $choice in
        1)
            echo -e "${YELLOW}Test 1: Simple Merge (feature-a + feature-b)${NC}"
            echo "This will create conflicts in 5 files"
            echo ""
            reset_repo
            git checkout feature-a
            echo ""
            echo -e "${RED}Attempting merge...${NC}"
            git merge feature-b || echo -e "${GREEN}✓ Conflicts detected! Now resolve them.${NC}"
            echo ""
            echo "Files with conflicts:"
            git status --short | grep "^UU"
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        2)
            echo -e "${YELLOW}Test 2: Refactor Merge (main + refactor)${NC}"
            echo "This will create MASSIVE conflicts in 2 files"
            echo ""
            reset_repo
            git checkout main
            echo ""
            echo -e "${RED}Attempting merge...${NC}"
            git merge refactor || echo -e "${GREEN}✓ Conflicts detected! Now resolve them.${NC}"
            echo ""
            echo "Files with conflicts:"
            git status --short | grep "^UU"
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        3)
            echo -e "${YELLOW}Test 3: Octopus Merge (ALL branches)${NC}"
            echo "🔥 HARDCORE MODE - This will create conflicts EVERYWHERE"
            echo ""
            reset_repo
            git checkout main
            echo ""
            echo -e "${RED}Attempting octopus merge...${NC}"
            git merge feature-a feature-b refactor || echo -e "${GREEN}✓ Maximum conflicts achieved!${NC}"
            echo ""
            echo "Files with conflicts:"
            git status --short | grep "^UU"
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        4)
            echo -e "${YELLOW}Test 4: Rebase Test${NC}"
            echo "This will rebase feature-a onto feature-b"
            echo ""
            reset_repo
            git checkout feature-a
            echo ""
            echo -e "${RED}Attempting rebase...${NC}"
            git rebase feature-b || echo -e "${GREEN}✓ Conflicts detected during rebase!${NC}"
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        5)
            echo -e "${YELLOW}Test 5: Cherry-pick Test${NC}"
            echo "This will cherry-pick a commit from feature-b"
            echo ""
            reset_repo
            git checkout main
            echo ""
            echo -e "${RED}Attempting cherry-pick...${NC}"
            git cherry-pick feature-b || echo -e "${GREEN}✓ Conflicts detected!${NC}"
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        6)
            show_status
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        7)
            reset_repo
            echo ""
            read -p "Press Enter to continue..."
            ;;
            
        8)
            echo "Exiting test suite. Happy testing! 🚀"
            exit 0
            ;;
            
        *)
            echo -e "${RED}Invalid choice. Please select 1-8.${NC}"
            echo ""
            ;;
    esac
done
