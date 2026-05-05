$sourceFiles = Get-ChildItem -Path src, index.html -Recurse -File | Where-Object { $_.Extension -match "tsx|ts|js|jsx|html|css" } | Select-Object -ExpandProperty FullName
$assets = Get-ChildItem -Path src/assets, public -Include *.png, *.jpg, *.jpeg, *.gif, *.svg, *.webp, *.mp4, *.webm, *.ogv -Recurse
$unused = @()

foreach ($asset in $assets) {
    $name = $asset.Name
    $found = $false
    # Special check for generic names like 1.mp4 to avoid false negatives
    # But usually searching for the full name is safe enough
    foreach ($file in $sourceFiles) {
        # Using -CaseSensitive $false just in case
        if (Select-String -Path $file -Pattern ([Regex]::Escape($name)) -Quiet) {
            $found = $true
            break
        }
    }
    if (-not $found) {
        $unused += [PSCustomObject]@{
            Name = $name
            Type = $asset.Extension.TrimStart('.')
            Path = $asset.FullName.Replace("E:\code\freelance\mb-hyderabad\", ".\")
        }
    }
}
$unused | ConvertTo-Json
