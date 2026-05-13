import os

file_path = r'c:\Users\rnsfo\Downloads\haven-eye-site\index.html'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Fix common broken encoding artifacts if they exist
replacements = {
    'â€”': '—',
    'â†’': '→',
    'âœ•': '✕',
    'ðŸŽ ': '🎁',
    'ðŸ“ž': '📞',
    'â˜…': '★',
    'ðŸ‘ ï¸ ': '👁️',
    'â‚¹': '₹',
    'ðŸ”¬': '🔬',
    'âš•ï¸ ': '⚕️',
    'ðŸ§’': '🧒',
    'ðŸ‘“': '👓',
    'ðŸ˜Ž': '😎',
    'ðŸ’§': '💧',
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
