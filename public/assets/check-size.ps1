Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("logo.png")
Write-Output ("Width: " + $img.Width)
Write-Output ("Height: " + $img.Height)
