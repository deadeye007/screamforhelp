# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]



## [1.0.2] - 2021-02-27
### Added
- White space for better readability.

### Changed
- Hid the console commands behind a 'debug' variable, in preparation for Stable.
- Flexed on the display in CSS in order to aid mobile users.

### Fixed
- Fixed a few areas where roomtraverse() is missing.
- Fixed the input not being 100% part of the game-text container.


## [1.0.1] - 2021-02-13
### Changed
- Fixed an issue on the bridge where the game could loop with no escape.


## [1.0.0] - 2021-02-12
### Added
- Corrected expectation of input (mobile automatically uses Uppercase)

### Removed
- All jQuery instances, as it overly complicated the setup with no benefit.