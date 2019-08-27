let
  euphenix = import (fetchTarball {
    url =
      "https://github.com/manveru/euphenix/archive/34252d3ec764e91d8578728573fa8350ce5127fe.tar.gz";
    sha256 = "0x2brxgvfpzshyc44xi0bgji55421b9v67xlj94qy750y9zlikf2";
  }) { };
in {
  euphenix = euphenix.euphenix;

  site = euphenix.build ./. {
    name = "david-anlagenbetreuung";
    favicon = ./favicon.svg;
    templateDir = ./.;
    routes = { "/index.html" = { template = [ ./index.html ]; }; };
  };
}
