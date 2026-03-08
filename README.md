# Scream for Help - BETA Version 2.0.0
# Scream for Help C++ - Alpha Version 0.0.1
SturMotor 1.0.0
SturmMotor C++ 0.0.1

# Work in Progress
"Scream for Help" is designed to be an episodic text-based Choose Your Own Adventure Game where you play a protaganist desperately trying to make it home.


# What to Expect
I am anticipating having Chapter One completed this year. The dialogue script has been completed and the work in the days and months to come will be less on adding dialogue and more on squashing bugs and finishing the engine upon which the game is based to expedite future chapters.


# Where Can I Play?
The game is accessible via a Docker container near you!

## Feedback is always appreciated!

## Run with Docker

1. Build the image:
   ```bash
   docker build -t scream-for-help .
   ```
2. Run the container:
   ```bash
   docker run --rm -p 8080:80 scream-for-help
   ```
3. Open `http://localhost:8080`.
