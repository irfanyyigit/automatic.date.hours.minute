# Password Strength Checker

---

## Description

A powerful and intuitive web-based tool that evaluates password strength in real-time as you type. This application provides instant feedback on your password's security level through visual indicators and descriptive messages, helping users create stronger and more secure passwords.

The Password Strength Checker implements industry-standard security criteria to assess password complexity, including length requirements, character diversity (uppercase, lowercase, numbers, and special characters), and provides users with actionable insights to improve their password security posture.

The primary objective of this project is to provide users with a practical password security assessment tool that educates them about best practices in creating strong, secure passwords while maintaining a clean and user-friendly interface.

---

## Technologies

The following technologies and web standards were utilized:

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with responsive design
- **JavaScript (ES6+)** - Real-time password analysis and DOM manipulation

---

## Installation

Getting started with Password Strength Checker is quick and straightforward:

1. **Clone or download** this repository to your computer
2. **Navigate** to the project folder
3. **Open** the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari, etc.)

**No additional setup or dependencies required** — this is a standalone web application that runs entirely in your browser.

---

## Usage

Using the Password Strength Checker is simple and intuitive:

1. **Open** the application in your web browser
2. **Enter** your password into the input field
3. **Observe** the real-time strength assessment:
   - **Very Weak** - Less than 6 characters
   - **Weak** - Missing required character types
   - **Medium** - Contains lowercase letters and numbers
   - **Strong** - Contains uppercase, lowercase, numbers, and special characters (8+ characters)
   - **Very Strong** - Meets all security criteria with optimal length

4. **Toggle password visibility** by clicking the "Show/Hide" button to verify your input without exposing your password to shoulder surfers

---

## Features

- **Real-time Strength Analysis** - Instant feedback as you type
- **Visual Strength Indicator** - Color-coded progress bar for quick assessment
- **Show/Hide Toggle** - Toggle password visibility for secure entry
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Clean Interface** - Intuitive and user-friendly design
- **Client-side Processing** - Your password stays secure; all processing happens locally in your browser

---

## How It Works

The Password Strength Checker evaluates passwords based on multiple criteria:

| Criteria | Requirements |
|----------|--------------|
| **Length** | Minimum 8 characters recommended |
| **Uppercase Letters** | At least one A-Z character |
| **Lowercase Letters** | At least one a-z character |
| **Numbers** | At least one digit (0-9) |
| **Special Characters** | At least one symbol (!@#$%^&*) |

Each criterion met increases the overall strength score, providing a comprehensive security assessment.

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Fully Supported |
| Firefox | Latest | Fully Supported |
| Safari | Latest | Fully Supported |
| Edge | Latest | Fully Supported |

---

## Security Note

Your security is our priority. All password analysis occurs entirely on your device. Your passwords are never sent to any server or external service.
