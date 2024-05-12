# Get the name of the WiFi interface
wifi_interface=$(iw dev | grep -oP 'Interface \K\w+')

# Use the WiFi interface to list all devices connected to it
connected_devices=$(iw dev $wifi_interface station dump | grep -oP 'Station \K\w+')

# Output the list of connected devices
echo "Connected devices on $wifi_interface:"
echo "$connected_devices"

