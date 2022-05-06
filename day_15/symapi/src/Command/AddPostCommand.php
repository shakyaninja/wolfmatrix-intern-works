<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:add-post',
    description: 'adds a post',
)]
class AddPostCommand extends Command
{
    protected function configure(): void
    {
        $this
            ->addArgument('title', InputArgument::OPTIONAL, 'Title for post')
            ->addArgument('content', InputArgument::OPTIONAL, 'content for post')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $title = $input->getArgument('title');
        $content = $input->getArgument('content');

        if ($title) {
            $io->note(sprintf('You passed an title: %s', $title));
        }

        if ($content) {
            $io->note(sprintf('You passed an content: %s', $content));
        }

        if ($input->getOption('option1')) {
            // ...
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
