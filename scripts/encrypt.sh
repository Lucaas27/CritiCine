#!/bin/bash

# Extract the key ID from the output of 'gpg --list-secret-keys'
key_id=$(gpg --list-secret-keys | grep -oP '^\s*\w{40}')

# Check if the key ID is not empty
if [ -n "$key_id" ]; then
    # Loop through .env* files and encrypt them using the extracted key ID
    for file in .env*; do
        if [ -f "$file" ] && [[ ! "$file" =~ \.enc$ ]]; then
            sops --encrypt \
            --pgp "$key_id" \
            "$file" > "${file}.enc"
        fi
    done
else
    echo "Error: No secret key found."
fi
